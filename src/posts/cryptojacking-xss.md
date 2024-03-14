---
title: "Finding and Disclosing a Cryptojacking XSS Vulnerability"
date: 2018-06-22 16:00:00 -0400
excerpt: "I had just arrived home from a friend's house and sat down at my desk when I
noticed something strange: the CPU fan was spinning loudly on my computer and
Chrome was using up 100% of the CPU. Now normally I wouldn't be concerned with
Chrome taking up 100% of RAM since that's just what Chrome does, but 100% of
CPU was definitely not right."
---

Note: The following vulnerability was discovered on January 6, 2018 and
disclosed to the affected company on January 7, 2018.

## Terms to know

* **Cryptojacking**: Hijacking a computer to mine cryptocurrency against the
owner's wishes or knowledge.
* **XSS** aka **Cross-Site Scripting**: Running arbitrary JavaScript code on a
web page usually through the use of some sort of input sanitization bug.
* **Input Sanitization**: Cleaning user input and replacing certain characters
(e.g. `<` and `>` with `&lt;` and `&gt;`) so it displays only as text, instead
of code or HTML.
* **Unicode**: an international standard method of encoding letters and glyphs
into a numeric representation readable and storable by computers.
* **Obfuscation**: hiding how a piece of code works, typically by turning useful
names into gibberish, while still being able to be run as code.

## Discovery

It was a calm, but cold Saturday night in January. If it weren't frigid there
may have been crickets chirping. The moon shone bright above. The stars
twinkled, probably, I couldn't really tell because you know, light pollution.

I had just arrived home from a friend's house and sat down at my desk when I
noticed something strange: the CPU fan was spinning loudly on my computer and
Chrome was using up 100% of the CPU. Now normally I wouldn't be concerned with
Chrome taking up 100% of *RAM* since that's just what Chrome does, but 100% of
CPU was definitely not right.

Looking through my open tabs I came across the culprit: a Cryptocurrency mining
pool stats page I had left auto-refreshing every few minutes had been
Cryptojacked through an XSS vulnerability. I edited my `hosts` file to point the
CoinHive domain at localhost and began investigating.

## How it works

The page I was viewing was a statistics page and the site had no authentication.
The attackers simply found a way to get a name onto the page where instead of
something the developers had expected it was instead a `<script>` tag with a
`src` to an external domain. The script pulled from this domain then had a
Unicode encoded script that went and downloaded the CoinHive mining payload
which then started mining on users' machines on behalf of the attackers.

Unfortunately I never saved the encoded script so there's nothing here to show
exactly how it was encoded and obbfuscated.

## Mitigation strategies

What I ended up recommending to them was to use input sanitization on both the
server and client side. The best way to do this would be to use an input
sanitization library that is well maintained and regularly used in production.
The more people use and contribute to these libraries the better the sanitzation
gets at preventing exploits like XSS and SQL Injection (that's another topic for
another time).

## Conclusion

After responsibly disclosing the vulnerability to them and being told they would
apply a fix, I don't think they ever bothered actually fixing the exploit. They
told me they were already working on a new site and that they weren't going to
make any changes to the current site, at least the last time I checked the
exploit still worked. This is a *very bad* position to take since all their
users were still using the old site and exploits should be fixed for as long as
a site stays on the internet and function but hey, that's just my opinion.

![Kermit drinks tea](https://s3.us-east-1.wasabisys.com/heyitspaul/blog_images/meme-kermit-drinking-tea.jpg)

## Recommended reading

* [Troy Hunt: Understanding XSS – input sanitisation semantics and outputencoding contexts](https://www.troyhunt.com/understanding-xss-input-sanitisation/)
* [OWASP Top 10 Vulnerabilities](https://www.veracode.com/directory/owasp-top-10)
