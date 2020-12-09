# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [Releases]

## [1.1.1] - 2020-12-09

Feeds are now giving feedback, when there is no date assigned to a feedItem. This will keep the order of the original feed, so newst messages from taht feed appear on top.

## [1.1.0] - 2020-12-07

[NEW API]
Attention: this contains breaking changes for old users.

Please beware, that _feeds.json_ and _blacklist.json_ have been split into several files. Also the structure of _feeds.json_ changed a bit and contains additional values. This was done to being able to implement a new api which can be used to build own frontends to the application.
Just fix your _feeds.json_ and put everything on the server again and your done!

## [1.0.0] - 2017-09-30

Initial Release of personalNews
