---
title: "Setting Up Postgres for Local Rails Development"
date: 2018-10-08 12:00:00 -0400
excerpt: "Professional Ruby on Rails developers will always recommend that your local
development environment match your production environment to help catch bugs
that occur due to inconsistent database implementations of the same feature.
Having something work locally in SQLite3 but not in Postgres is actually a
common enough problem that this mantra is often repeated, but leaves the Junior
dev learning proper Rails development to their own devices when it comes to
actually setting up Postgres on their local environment."
---

Note: I am going to assume you have at least a little bit of experience in
working with a Ruby on Rails app.

## Why the post?

Professional Ruby on Rails developers will always recommend that your local
development environment match your production environment to help catch bugs
that occur due to inconsistent database implementations of the same feature.
Having something work locally in SQLite3 but not in Postgres is actually a
common enough problem that this mantra is often repeated, but leaves the Junior
dev learning proper Rails development to their own devices when it comes to
actually setting up Postgres on their local environment.

This blog post is an attempt to remedy that situation and also be a quick
reference for those who only occasionally touch Postgres when they absolutely
need to.

## Installing Postgres

The first thing we need to do is actually get Postgres installed on our local
machine since it's required by the `pg` gem.

Most distributions will have a recent-ish version of Postgres available from
the built-in package manager without prior setup requried.

For Debian/Ubuntu this should get you set up and running:
```sh-session
$ sudo apt update
$ sudo apt install postgresql libpq-dev
```

For Homebrew on macOS:
```sh-session
$ brew install postgresql libpq-dev
```

For other operating systems you can consult the [official Postgres downloads
page](https://www.postgresql.org/download/).

Now we need to actually get Postgres running. Most Unix-like OSes have the
`system` command for starting, stopping, and checking the status of different
services. If the following command doesn't work, double check the Postgres
startup process for your specific operating system.

```sh-session
$ sudo service postgresql start
```

If the above command worked you should see something like this in your terminal:
```
* Starting PostgreSQL 10 database server                                  [ OK ]
```

## rails new

Next we're going to set up a toy rails app so we can make sure our database
connection actually works from Rails (you can always just use an existing app
but for demonstration purposes we'll be starting fresh).

```sh-session
$ rails new test_app --database=postgresql
$ cd test_app
```

Next we're going to add an Account model to the app so we have something to
migrate against the database.

```sh-session
$ rails generate model Account username:string
```

In this model we've created a table named Account with a username field of type
string. We won't be migrating this just yet, so hang tight for that.

## The database.yml file

Our next step is to setup the `config/database.yml` file so it points to our
(currently non-existant) database and database user.

```yaml
default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  host: localhost
  port: 5432 # This is the default, but you may need to change this.
  username: test_app
  password: test_app

development:
  <<: *default
  database: test_app_dev

test:
  <<: *default
  database: test_app_test
```

The `production` settings are omitted as they're going to vary depending on your
deployment and we only want to focus on getting Postgres running locally.

## Creating the Databases

The next step is to create the `test_app` role which our app will be using to
log into Postgres in order to create, drop, or modify data.

```sh-session
$ sudo -u postgres psql
```

```sql
postgres$ CREATE ROLE test_app WITH CREATEDB LOGIN PASSWORD 'test_app';
postgres$ \\du
```

After following the commands, we should now see an output table of the Postgres
roles, and our new `test_app` user should be on the list.

```
                                     List of roles
  Role name   |                         Attributes                         | Member of
--------------+------------------------------------------------------------+-----------
 postgres     | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 test_app     | Create DB                                                  | {}
```

Now we need to give this new user some databases.

```sql
postgres$ CREATE DATABASE test_app_dev OWNER test_app;
postgres$ CREATE DATABASE test_app_test OWNER test_app;
postgres$ \\l
```

```
                                List of databases
     Name      |  Owner   | Encoding | Collate |  Ctype  |   Access privileges
---------------+----------+----------+---------+---------+-----------------------
 postgres      | postgres | UTF8     | C.UTF-8 | C.UTF-8 |
 template0     | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
               |          |          |         |         | postgres=CTc/postgres
 template1     | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
               |          |          |         |         | postgres=CTc/postgres
 test_app_dev  | test_app | UTF8     | C.UTF-8 | C.UTF-8 |
 test_app_test | test_app | UTF8     | C.UTF-8 | C.UTF-8 |
(5 rows)
```

Perfect, we now have our `test_app` user, and our `test_app_dev` and
`test_app_test` databases. We can now go ahead and perform the migration to make
sure everything went well.

## Putting it all together

Finally, we're going to pop back out of psql and run our Rails migration.

```sql
postgres$ \\q
```

```sh-session
$ rails db:migrate
```

Give it a bit of a second and if it was successful you should now see a terminal
printout of the `account` table you just created.

```
== 20180925153232 CreateAccounts: migrating ===================================
-- create_table(:accounts)
   -> 0.0251s
== 20180925153232 CreateAccounts: migrated (0.0251s) ==========================
```

**NOTE: If you get an error similar to the following, make sure Postgres is both
running and that the port set in the `database.yml` file matches the port
Postgres is using. You can get the port that Postgres is setup to use by running
`service postgresql status`.**

```
PG::ConnectionBad: could not connect to server: No such file or directory
        Is the server running locally and accepting
        connections on Unix domain socket "/var/run/postgresql/.s.PGSQL.5432"?
```

## Conclusion

Now that we've setup our local Postgres environment we can easily develop and
test against Postgres' specific quirks and differences from other database
management software.

Now that you're using the same database on all environments, you can even start
using (and testing with) Postgres-specific SQL features you won't find in other
DBMSes. This is probably the best part of all, since now you'll finally be able
to use all those features you've been hearing about that Postgres has, [like
SQL Views](https://github.com/thoughtbot/scenic).
