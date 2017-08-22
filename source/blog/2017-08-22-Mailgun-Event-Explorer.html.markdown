---
title: Mailgun Event Explorer
date: 2017-08-22 11:18 UTC
author: Paul Scarrone - PS/gan
category: development
tags: php, mailgun, webpack
---

Sometimes you find yourself in a situation where your work and your side projects find overlap. I found myself in this situation recently with client work and my work on the Phalcon framework.

I created the Mailgun Event Explorer for a couple of reasons. Mainly to solve the problem of needing to read the logs while not having access to the Mailgun console. I had access to the API key, but only the administrators, who live in a timezone, had access to the Mailgun console. This generally was creating difficulty for the development team, and leaving the logs under watched, as those with access have other work as well.

So I sat down and created my own viewer. This allows you to see top level info, such as the ID, Email, whether it was Rejected or Failed, and the reason. It does this without the clutter of extra fields or the hassle of reading JSON. Perhaps more importanlty, it improves upon the existing pagination system Mailgun had in place. Making the data easier and quicker to navigate.

Lastly, this allows for a little experimentation for some up coming videos I am planning on doing&#8230; Combining Webpack and Phalcon for building applications with rich clients.

<div class="responsive-img" style="margin:auto;">
  <img src="/blog/images/mailgun_event_explorer.png"/>
</div>

Below is the documentation from the GitHub repo.

[https://github.com/SavvySoftWorksLLC/mailgun_event_explorer](https://github.com/SavvySoftWorksLLC/mailgun_event_explorer)


#### MailGun API Event Log Reader - **Beta* *

For those situations when you have API access to MailGun but not access to the MailGun Console you can use this to walk the log history of `Rejected` and `Failed` events.

There are two reasons for this project:

- Mailgun pagination sucks for usability
- Who wants to read JSON when you could use `CTRL-F`

#### Project Dependencies
* Phalcon 3.2 - https://github.com/phalcon/cphalcon
  * Phalcon Devtools(for serve command) - https://github.com/phalcon/phalcon-devtools
* Node 6.3+
* Webpack 3.5+

#### Setup
1. Fork/Clone
2. $`cp .env.sample .env`
3. Set your Mailgun api in .env
4. npn/yarn install
5. $`webpack`
6. $`phalcon serve`
7. $`open http://localhost:8000`

#### About
This project is in preparation for a series of tutorial videos combining Webpack and Phalcon for building application with rich clients.
