# personalNews
Do you like getting an overview of news? Do you prefer timelines? With personalNews you'll get your news-sources presented as a timeline to get a quick overview of whats currently happening. It's like twitter, but for news!

![Screenshot](/.screenshots/personalnews-iphone.jpg)

## How does it work?
Just place the contents of the folder `/htdocs` on your own webserver. Make sure it supports *php* - this is the only requirement. If feeds didn't get fetched, try to modify your php.ini and allow *allow_url_fopen* `allow_url_fopen = 1`. Some providers only require to tick a checkbox *allow_url_fopen* in the backoffice to allow this functionality.

### Use case
I build this primarily to use it in a webpanel in vivaldi. But I really like to use this app on mobile too. It gives me a quick overview of whats currently happening. I really hope you enjoy this little tool as much as I do. :)

### Want a demo?
[http://www.metafolio.de/fragments/personalnews/](http://www.metafolio.de/fragments/personalnews/)


### Setup your own links
personalNews comes with a default list of links, to show you how it works. It contains a list of popular news-sites and some development-ressources. You can change that. Just head over to '/htdocs/data/data.json` and play with that file. It's quite self explanatory.

## Features
- easy to configure via json
- only requires php on your server
- uses vanillaJS (to minimize file-size)

### Planned Features
- toggle descriptions
- ~~allow theming~~ (done)
- allow blacklisting of news
- grouping of related news
- ~~multiple timelines~~ (done)
- allow onsite-editing so you don't have to fiddle with the json-file

## Infos for local development
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

## Kudos
1. Screenshots on this page made with [http://magicmockups.com/](http://magicmockups.com/)
