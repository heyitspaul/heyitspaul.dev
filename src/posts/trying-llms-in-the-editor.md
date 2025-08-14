---
title: "Trying Out LLMs in the Code Editor"
date: 2025-08-14 12:00:00 -04:00
excerpt: "I've been skeptical of and hesitant to use \"AI\". I've been watching the progression of LLMs for the past 10+ years: one of my first instances of using Ruby was setting up a Markov chain Twitter bot and customizing it to my needs. The nonsense it generated was humorous."
---

## Preamble

I've been skeptical of and hesitant to use "AI". I've been watching the progression of LLMs for the past 10+ years: one of my first instances of using Ruby was setting up a Markov chain Twitter bot and customizing it to my needs. The nonsense it generated was humorous.

Since then LLMs have grown massive in scope and size, training on every scrap of human-generated data the companies behind them could find, to the point where there is no longer enough freely available data and LLM companies have to generate synthetic data for their successor models. It is definitely impressive being able to call on the predictive text capabilities of the past 2,000+ years of human writing, but it is still a more advanced auto-complete in my mind, despite what proponents scream from their rooftops.

Watching GitHub Copilot stumble around has also been fascinating. Training on every publicly available code repo is certainly a choice they made; I'm not sure if they considered the idea that a bulk of public code is poorly thought out garbage slapped together in a weekend. It certainly shows in the outputs, but I've had to deal with poorly thought out garbage code before, so is there really any difference?

## Getting to the Point

With forks of VS Code earning billions in funding by stapling on LLM code generation, I began to wonder again if it's really just hype, or if it has actually improved from when I tried Copilot in early 2024. The answer is yes, they have improved, but the code that Cursor's models is able to generate for me is still not free of issues.

As I'm writing this, I'm working on an inventory management system for my side business. I decided to ask GPT-5 to create a database schema, and took a look at what it could give me. What it produced was close, but it was more complex than necessary and had far more foreign keys than required. It could be because I was using DBML to describe the database and it's not as well represented in the training data, but whatever it was, it was still suboptimal.

Another usage recently was in an aging PHP codebase I'm desperately trying to keep afloat without pissing off the users. I fixed a longstanding bug that was present throughout the entire codebase and Cursor's auto mode handled it fairly well. I'm not sure which exact model was used, as Cursor does not surface this information unless you have the forethought to ask the LLM itself, but it was competent and capable.

I then asked it if there would be any issues upgrading from PHP 8.2 to 8.3. The LLM proceeded to grep the codebase, check the documentation, and identify any issues it could find. In my opinion, this may be the best use for LLMs currently: using tool-calling capabilities to cross-reference something in the background while I'm focused on an entirely different task.

## Takeaways

LLMs still have a long way to go. GPT-5 has some improvements but overall feels like an incremental upgrade. I will be interested to see what Anthropic's Claude model will be capable of next, but I'm not expecting anything groundbreaking.

I will likely be turning off tab-completion. It currently conflicts with the underlying VS Code's matching-bracket system and that's just annoying in its own right, but beyond that it still feels like I'm fighting with it for either the right function or path, or it ends up hallucinating something that doesn't work. I'd rather it stay out of my way for now. I find this a bit ironic, as auto-complete *should* be what LLMs are best at.

Do I still think the "AI Revolution" is overhyped? Absolutely. Am I going to take advantage of all the VC money flowing in to these projects that aren't currently profitable? Absolutely. As for AGI? I'm not convinced we're anywhere near that. But, at least it can copy-edit my blog posts.
