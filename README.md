# sails-hook-flash

[![NPM Version][npm-version]][npm-url]
[![NPM Download][npm-download]][npm-url]
[![Travis CI][travis-ci]][travis-url]
[![Coverage Status][coveralls]][coveralls-url]

The simplest way to use **flash messages** in your [Sails](http://sailsjs.org)
application. This is useful when you want to redirect and have a special message
shown on the next page.

## Installation

```
npm install sails-hook-flash
```
*Use `--save` to add in your package.json.*

## Example

Adding a new flash message:
```js
// api/controllers/SampleController.js
login: function (request, response) {
  request.addFlash('success', 'A success message.');
  return response.redirect('/sample/success');
}
```

Rendering your flash message:
```js
// views/sample/success.ejs
<% flash.get('success').forEach(function (message) { %>
    <div style="color:green;">
      <%= message %>
    </div>
<% }) %>
```
*NOTE: The EJS view engine is used in this sample, but you're not limited to it.*

## Usage

#### Controller layer
* `request.addFlash(type, message)` - Stores a new message
* `request.getFlash(type)`          - Returns all messages from a type
* `request.hasFlash(type)`          - Checks if a message type was stored

#### View layer
* `flash.all()`     - Returns all messages
* `flash.get(type)` - Returns all messages from a type
* `flash.has(type)` - Checks if a message type was stored

[npm-url]: http://npmjs.org/package/sails-hook-flash
[travis-url]: http://travis-ci.org/dudemelo/sails-hook-flash
[coveralls-url]: https://coveralls.io/github/dudemelo/sails-hook-flash?branch=master

[npm-version]: https://img.shields.io/npm/v/sails-hook-flash.svg?style=flat-square
[npm-download]: https://img.shields.io/npm/dm/sails-hook-flash.svg?style=flat-square
[travis-ci]: https://img.shields.io/travis/dudemelo/sails-hook-flash.svg?style=flat-square
[coveralls]: https://img.shields.io/coveralls/dudemelo/sails-hook-flash.svg?style=flat-square
