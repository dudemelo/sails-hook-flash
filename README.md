# sails-hook-flash

[npm-url]: http://npmjs.org/package/sails-hook-flash
[travis-url]: http://travis-ci.org/dudemelo/sails-hook-flash

[![NPM version](https://img.shields.io/npm/v/sails-hook-flash.svg?style=flat-square)][npm-url]
[![NPM download](https://img.shields.io/npm/dm/sails-hook-flash.svg?style=flat-square)][npm-url]
[![NPM download](https://img.shields.io/travis/dudemelo/sails-hook-flash.svg?style=flat-square)][travis-url]

The simplest way to use **flash messages** in your [Sails](http://sailsjs.org) application. This is useful when you want to redirect and have a special message shown on the next page.


## Example

Add a new flash message
```js
// api/controllers/UserController.js
login: function (req, res) {
  req.addFlash('success', 'A success message');
  return res.redirect('/sample/success');
}
```

Render your flash message
```js
// views/admin/index.ejs
<% flash.get('success').forEach(function (message) { %>
    <div class="alert alert-success">
       <%= message %>
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
       </button>
    </div>
<% }) %>
```
*NOTE: The EJS view engine is used in this sample, but you're not limited to it.*


## Usage

#### Controller layer
* `req.addFlash(type, message)` - Store a new flash message
* `req.getFlash(type`           - Get a specific type of flash messages
* `req.hasFlash(type`           - Check if exists a specific type of flash message

#### View layer
* `flash.all()`     - Get all flash messages
* `flash.get(type)` - Get a specific type of flash messages
* `flash.has(type)` - Check if exists a specific type of flash message


## Instalation

```
npm install sails-hook-flash
```
*Use `--save` to add in your dependencies*
