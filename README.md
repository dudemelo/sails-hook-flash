# sails-hook-flash

[npm-url]: https://npmjs.org/package/sails-hook-flash

[![NPM version](https://img.shields.io/npm/v/sails-hook-flash.svg?style=flat)][npm-url]
[![NPM download](https://img.shields.io/npm/dm/sails-hook-flash.svg?style=flat)][npm-url]

The simplest way to use **flash messages** in your [Sails](http://sailsjs.org) application. This is useful when you want to redirect and have a special message shown on the next page.


## Usage

1. Add a new flash message

  ```js
  // api/controllers/UserController.js
  login: function (req, res) {
    req.addFlash('success', 'A success message');
    return res.redirect('/sample/success');
  }
  ```

2. Recover and make it accessible in your view

  ```js
  // api/controllers/AdminController.js
  index: function (req, res) {
    res.locals.flashMessages = req.getFlash('success');
    return res.view();
  }
  ```

3. Render your messages

  ```js
  // views/admin/index.ejs
  <% flashMessages.forEach(function (message) { %>
      <div class="alert alert-success">
          <%= message %>
      </div>
  <% }) %>
  ```
  *NOTE: The EJS view engine is used in this sample, but you're not limited to it.*


## Instalation

```
npm install sails-hook-flash
```
*Use `--save` to add in your dependencies*
