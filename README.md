# personalNews

Do you like getting an overview of news? Do you prefer timelines? With personalNews you'll get your news-sources presented as a timeline to get a quick overview of whats currently happening. It's like twitter, but for news!

![Screenshot](/.screenshots/personalnews-iphone.jpg)

## How does it work?

Make sure your server supports _php_ - this is the only requirement. If feeds didn't get fetched, try to modify your php.ini and allow _allow_url_fopen_ `allow_url_fopen = true`. Some providers only require to tick a checkbox _allow_url_fopen_ in the backoffice to allow this functionality.

For local development the php-files are served through vagrant. They reside next to the index.html (used for react) in the folder `/htdocs`. You could just remove the index-file and put everything in there on your server and you're done.

Since there is also an api available, you can also run `npm run build`. After that you'll find the folder `/build`. Put this on your server if you want the react-frontend too.

Of course you could create your own client and just use the api.

### Use case

I build this primarily to use it in a webpanel in vivaldi. But I really like to use this app on mobile too. It gives me a quick overview of whats currently happening. I really hope you enjoy this little tool as much as I do. :)

### Want a demo?

[https://demo.saschadiercks.de/personalnews/](https://demo.saschadiercks.de/personalnews/)

### Setup your own links and blacklist-keywords

personalNews comes with a default list of links and some example keywords for blacklisting, to show you how it works. It contains a list of popular news-sites and some development-ressources. You can change that. Just head over to '/htdocs/data/_data_.json` and play with that files. It's quite self explanatory.

## Features

- easy to configure via json
- only requires php on your server
- uses vanillaJS (to minimize file-size)

### Planned Features

- toggle descriptions
- ~~allow theming~~ (done)
- ~~allow blacklisting of news~~ (done)
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

### React environment

1. run `npm install`
2. run `npm run start` to start react
3. visit (http://localhost:3000/)

### Usage of gulp

1. Make sure, you have node.js installed on your computer (https://nodejs.org/en/)
2. run `npm install gulp-cli -g` to install gulp
3. run `npm install` to install gulp in your project
4. run `gulp sass:watch` to compile SASS on the fly

## Kudos

1. Screenshots on this page made with [http://magicmockups.com/](http://magicmockups.com/)
