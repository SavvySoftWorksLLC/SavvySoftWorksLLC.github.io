---
title: Why We Moved On to Phalcon from Laravel
date: 2017-06-25 11:18 UTC
author: Paul Scarrone
category: development
tags: php, web development
---

As a company we made the decision to move towards [Phalcon](https://phalconphp.com/en/) and away from [Laravel](https://laravel.com/) for a lot of reasons but the biggest one was performance. The following is our real life story of how Phalcon saved a project and became our goto PHP framework.

About a year ago SavvySoftWorks re-entered the world of PHP for a client project that didn't require [Wordpress](https://wordpress.org/download/). It was our first experience with a **MVC** PHP framework since maintaining an aging project in [CodeIgnighter](https://codeigniter.com/). We used Laravel to build some rather complex features that were the intersection between finance and ERP.

Laravel was a big deal to us as we are primarily Ruby and JavaScript developers we were excited to use an opinionated framework that was intentionally designed to mirror Ruby on Rails. The opportunities were big when you consider the lower memory footprint and often cheaper resources requirements of a reasonably size PHP service. What we found in Laravel was something that was written mirroring more of .NET MVC than that of a productivity oriented framework like RoR. During the project Laravel was at version 5 which seemed like an obvious marketing strategy to compete with the current release of RoR. Really this kind of tactic should have nothing to do with the framework and it didn't, anecdotally it spoke volumes about the frameworks goals as a profitable business as opposed to building the finest Free and Open Source Software.

With all our feelings put aside now the real problem we faced was performance both in productivity and in throughput. At the time this project was the heir apparent to the clients current solution written in WordPress.
Being that Wordpress is not an "Application Framework" one might suspect that most things would be able to beat it. You would be wrong, one of Wordpress's great benifits is it follows the strengths of PHP very well and the code still looks like it was written in the 90s employing superglobals.

So when we started comparing features between the old Wordpress application and our new Laravel project it was evident that aside from the maintainability of our new code what we had built was not exactly better. We thus set out on an adventure to find a more performance MVC for our hybrid application using PHP and VueJS.

<div style="width: 80%; margin:auto;">
    <a target="_blank" href="https://www.techempower.com/benchmarks/#section=data-r13&hw=cl&test=fortune&l=4fthbz"><img src="/blog/images/php-framework-performance-graph.png"/>
    Click to See More</a>
</div>

The keyword was performance, and that us immediately to Phalcon. If you take a look at how this stacks up from the date above a small Phalcon app retains most of the speed of native PHP without a framework. This is because of an underlying technology [Zephir](https://zephir-lang.com/) which allows Phalcon to be compiled to a native C extension. How does this make the difference? Lets consider your traditional PHP based framework to get to your application's code possibly hundreds of other PHP files were loaded and run first. With Phalcon only your applications code is interpreted by PHP the rest executed fully optimized by the operating system. It seems so simple to make your PHP application faster just reduce the amount of code. The power of Zephir is not limited to Phalcon though. As you develop complex business logic for you application it can be migrated to Zephir and compiled as a native C extension further reducing the bulk of PHP code in your application.

With Phalcon in place and Laravel in the rear-view the project was saved and due to its smaller footprint is also easier to maintain.
