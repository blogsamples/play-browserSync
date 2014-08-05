# Play - BrowserSync

This project is a proof of concept to enable all the awesome features of [BrowserSync](http://www.browsersync.io/) in top of a [Play Framework](www.playframework.com) server. Also using [Gulp](http://gulpjs.com/) to demonstrate how to both compile and reload assets.

## Setup

This setup assumes you already have `sbt` and `NPM` installed on your machine.

1. Go to the root of the project
* Run `npm install` to grab some dependencies
* Open 2 shells
* Run `sbt ~run` in the first one and wait for it to finish. You should have a Play server running now.
* Run `gulp` in the second one, this will start a BrowserSync proxy on top of the Play server (run `npm install -g gulp` if you don't have gulp yet).
* Enjoy the result at [http://localhost:9001](http://localhost:9001)

## Live-reloading

BrowserSync is configured to listen to the following files and live-reload them:

* `app/views/index.scala.html` : a Scala template. Will only work if you are using ``~run` to auto-compile
* `public/javascript/main.js` : a JavaScript file, will trigger a full reload of the page
* `resources/less/main.less` : a LESS file, watched by Gulp, that will be automatically compiled to  `public/stylesheets/main.css`, which is watched by BrowserSync and will be hot deployed (the page will be repainted with the new CSS without a full reload)

## Multi-device sync

The 2nd killer feature of BrowserSync (after the live-reloading) is to sync your app across several devices. Meaning that you can open [http://localhost:9001](http://localhost:9001) in several browsers, in several devices (desktop, tablet, smartphone, ...) and start interacting with them. All basic actions, like clicking, touching, scrolling, ... will been replicated on all devices. This is pure awesomeness.

## Author

Just me... [Paul Dijou](http://pauldijou.fr)

## License

~~~
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2014 Paul Dijou

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
~~~
