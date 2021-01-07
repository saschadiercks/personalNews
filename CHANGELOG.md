# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

## [1.6] - 2021-01-07

API now returns if an item is read or unread
the number of timelineitems to be returned can now get set by using the url-parameter: maxitemcount

## [Releases]

## [1.5.1] - 2021-01-07

prevent unread-badge getting removed, when modal is opened

## [1.5] - 2021-01-07

lock scroll, when modal is opened

## [1.4.2] - 2021-01-06

fix gap for overlay and unread-badge

## [1.4.1] - 2021-01-06

Using smaller font-size on mobile for better text separation.

## [1.4] - 2021-01-06

Total refactor of CSS.
We're using ITCSS and BEM for improved structuring of the project.
In addition, we've added custom properties and SCSS-vars so devs could adjust the theme in more complex ways. This works on global styles and per component-styles.

## [1.3.5] - 2021-01-03

Fixes the threshold to make unread-items appear later. Brings back the unread-indicator too.

## [1.3.4] - 2021-01-01

Hide unread-item badge if scrollPosition reaches height of the header. This prevents showing a false value in the unread-badge if all items were scrolled throught.

## [1.3.3] - 2020-12-31

Remove protocl and ww from AuthorDescription to save some space

## [1.3.2] - 2020-12-31

Fix item-count going below zero (again)

## [1.3.1] - 2020-12-27

Fix item-count going below zero

## [1.3] - 2020-12-27

Add support for docker

## [1.1.1] - 2020-12-09

Feeds are now giving feedback, when there is no date assigned to a feedItem. This will keep the order of the original feed, so newst messages from taht feed appear on top.

## [1.1.0] - 2020-12-07

[NEW API]
Attention: this contains breaking changes for old users.

Please beware, that _feeds.json_ and _blacklist.json_ have been split into several files. Also the structure of _feeds.json_ changed a bit and contains additional values. This was done to being able to implement a new api which can be used to build own frontends to the application.
Just fix your _feeds.json_ and put everything on the server again and your done!

## [1.0.0] - 2017-09-30

Initial Release of personalNews
