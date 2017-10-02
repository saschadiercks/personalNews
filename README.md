# personalNews
Do you like getting an overview of news? Do you prefer timelines? With personalNews you'll get your news-sources presented as a timelin to get a quick overview of whats currently happening.

## How does it work?
Just place the folder `/htdocs` on your own webserver. Make sure it supports *php* - this is the only requirement.

### Want a demo?
[http://www.metafolio.de/fragments/personalnews/](http://www.metafolio.de/fragments/personalnews/)


### Setup your own links
personalNews comes with a default list of links, to show you how it works. It shows up with a list of popular news-sites and some development-Ressources. You change that. Just head over to '/htdocs/data/data.json` and play with that file. It's quite self explanatory.

## Features
- easy confiurable via json
- only requires php on your server
- uses vanillaJS

### Planned Features
- toggle descriptions
- allow theming
- allow blacklisting of news
- grouping of related news
- allow onsite-editing so you don't have to fiddle with the json-file

### Usage of Vagrant
1. install vagrant on your machine (https://www.vagrantup.com/)
2. install Virtualbox (https://www.virtualbox.org/wiki/Downloads)
3. head to your local repository an enter `vagrant up`
4. Wait a while until all components are loaded an the box is running. (The first start can take a while)
5. visit (http://127.0.0.1:8080/)

### Usage of gulp
1. Make sure, you have node.js installed on your computer (https://nodejs.org/en/)
2. run `npm install gulp-cli -g` to install gulp
1. run `npm install` to install gulp in your project
2. run `gulp sass:watch` to compile SASS on the fly
