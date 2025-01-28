# personalNews

Do you like getting an overview of news? Do you prefer timelines? With personalNews you'll get your news-sources presented as a timeline to get a quick overview of whats currently happening. It's like twitter, but for news!

![Screenshot](/.screenshots/personalnews-iphone.jpg)

---

- [Introduction](#personalNews)
- [How does it work](#how-does-it-work)

  - [Use case](#use-case)
  - [Want a demo](#want-a-demo)
  - [Setup your own links and blacklist-keywords](#setup-your-own-links-and-blacklist-keywords)

- [Features](#features)

  - [Planned Features](#planned-features)

- [Api-documentation](#api-documentation)

  - [What does the api return?](#what-does-the-api-return?)
  - [output](#output)
  - [input](#input)

- [Infos for local development](#infos-for-local-development)

---

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

personalNews comes with a default list of links and some example keywords for blacklisting, to show you how it works. It contains a list of popular news-sites and some development-ressources. You can change that. Just head over to '/htdocs/data/\*' and play with that files. It's quite self explanatory.

## Features

- easy to configure via json
- only requires php on your server
- uses vanillaJS (to minimize file-size)
- API for fetching content (get only for now)
- allows hiding the UI via url-parameter (mode=minimal)

### Planned Features

- toggle descriptions
- ~~allow theming~~ (done)
- ~~allow blacklisting of news~~ (done)
- grouping of related news
- ~~multiple timelines~~ (done)
- allow onsite-editing so you don't have to fiddle with the json-file

## Api documentation

The api is called via `/api/v1/` and the output can be controlled via url-parameters. This is great for building your own frontend or embed the news in your website or project.

### What does the api return?

#### Output

The **output** is returned as a json

- meta
  - state: error || warning || info || ok
  - message: null || string (with additional info)
  - itemCounts
    - totalItems: number (of items returned)
    - newItems: number (of items from timestamp given to the api)
  - pinnedMessage: null || string (configure in `htdocs/data/meta.json`)
- content: array (of items to be displayed)
- channels: array (of configured channels see `htdocs/data/feeds.json`)

#### Input

**Input** for filtering the output. Uses url-parameters

**channel=someChannel**

Return items from the selected channel. This uses the channels-object configured in `htdocs/data/feeds.json`. If the channel given to the api doesn't exist or none channel is given to it, it returns the content of the first channel from `htdocs/data/feeds.json`.

**timestamp=some timestamp**
Using a timestamp the api will return the number of new items after that given timestamp. If no timestamp is set, the api will return the number of totalItems as `newItems`. The number of totalItems is always returned as a sperate value.

**maxitemcount=number**
The number of items in the timeline can be reduced by passing in `maxitemcount`. If `maxitemcount` is a number higher than zero, this number is used to determine the number of items in the feed. If a string or 0 is passed, all items in the feed will be returned. The meta-values `totalItems`and `newItem` will adept too. `maxitemcount`is useful if you're building a project that uses this api and you only want to display a maximal amount of items.

**maxtextlength=number**
The rough textlength of the summary of the article in the timeline. Rough? The api searches for a "." in the summary near the entered number, which represents the rough amount of characters for the rendered summary. So, if you only want to render the first sentence of a summary, you should use low values like `maxtextlength=1`. `maxtextlength=0` is equal to not using the parameter at all - resulting in unshortened summaries.
In the attached example page, I'm using a `maxtextlength=400`.

## Infos for local development

### Usage of docker (preferred)

1. install docker on your machine (https://docs.docker.com/get-docker/)
2. head to the local repository and run `docker-compose up`
3. Wait a while until all components are loaded an the box is running. (The first start can take a while)
4. visit (http://127.0.0.1:8080/)

### Usage of Vagrant

1. install vagrant on your machine (https://www.vagrantup.com/)
2. install Virtualbox (https://www.virtualbox.org/wiki/Downloads)
3. head to your local repository an enter `vagrant up`
4. Wait a while until all components are loaded an the box is running. (The first start can take a while)
5. visit (http://127.0.0.1:8080/)

### Usage of gulp

1. Make sure, you have node.js installed on your computer (https://nodejs.org/en/)
2. run `npm install gulp-cli -g` to install gulp
3. run `npm install` to install gulp in your project
4. run `gulp sass:watch` to compile SASS on the fly

## Kudos

1. Screenshots on this page made with [http://magicmockups.com/](http://magicmockups.com/)
