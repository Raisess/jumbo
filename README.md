# JumboJS CLI and framework

<div style="width: 100%; text-align: center;">
  <img src="https://images.emojiterra.com/google/android-10/128px/1f9a6.png" />
</div>

A CLI and framework called JumboJS.
This package optimize time of creating express api core and middleware routes.

## Install JumboJS CLI

```shell
$ npm i -g jumbojs
```

## Creating a app

To create a new jumbo app type:

```shell
$ jumbo new <appName> <appPort>
```

The default app port is 8000.

## Starting your app

To start your app type:

```shell
$ cd <appName>
$ npm install
$ npm start
```
And check in your browser "http://localhost:appPort/api".

## Do not want create a API use views and make a MVC project

To create view in project type:

```shell
$ jumbo view <viewName>
```

and apply in your app.js to use views, like:

```js
const { viewsInit } = require('jumbojs/framework')(app);

app.get('/', function (req, res) {
  res.render('index', { title: 'My jumbo pug page' });
});
```

and try this path "http://localhost:appPort/" without api endpoint.

## Creating a new app route

To create new route in your app, you must to enter in app folder and type:

```shell
$ jumbo route <routeName>
```

And your route as created in "./src/routes/<routeName>.js".

## Using JumboJS framework

### Databases

#### MySQL

Creating a mysql connection, making a query and close connection.

```js
const { databases } = require('jumbojs/framework');
const { mysql } = databases;

// instancing a connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myDatabaseName'
});

module.exports = {
  mysql: mysql,
  conn: conn
}
```

or use CLI to make this file for your

```shell
$ jumbo database mysql
```

now configure your options in createConnection method and make your model

```javascript
const { mysql, conn } = require('./mysql.conn.js');

// making a query
mysql.query(conn, 'SELECT * FROM users', (res) => {
  return console.log(res);
});

// clossing connection
mysql.close(conn);
```

#### Firebase

Using firebase driver, create new project and get web sdk in [Firebase Console](https://console.firebase.google.com/u/0/?hl=pt-br).

```javascript
const { databases } = require('jumbojs/framework');
const { firebase } = databases;
const {
  fb,
  initiliaze,
  get,
  set,
  delete
} = firebase;

// your firebase sdk config object
const myFireBaseSDK = require('./myFireBaseSDKFile');

// init your firebase app
const fbInit = initialize(fb, myFireBaseSDK);

// set data in your real-time database
set(fb, '/users', {
  1: {
    name: 'foo'
  }
});

// get your real-time database data
get(fb, '/users', users => {
  return console.log(users);
  /*
    {
      1: {
        name: 'foo'
      }
    }
  */
});

// remove data from real-time database
delete(fb, '/users');
```

### Controllers

When you have create a model to use your database, try to create a controller.

```shell
$ jumbo controller <controllerName>
```

Set your controller name equals they model name, for User controller type user and the CLI make the first letter uppercase in the file.

This file is created in './src/controllers' folder.

**THIS FILE IS A JAVASCRIPT CLASS "OBJECT"**

### Utils

#### Time

How to get data timestamp???

```javascript
const { utils } = require('jumbojs/framework');
const { now } = utils;

console.log(now());
/*
  returns a object
  {
    day,
    month,
    year,
    time: this string contains hour:mins:secs
  }
*/
```

#### Request

Make a request for another url.

```javascript
const { utils } = require('jumbojs/framework');
const { request } = utils;

// get request
request({
  method: 'get',
  baseUrl: 'https://some-domain.com/api',
  url: '/users'
}, response => {
  console.log(response);
});

// post request
request({
  method: 'post',
  baseUrl: 'https://some-domain.com/api',
  url: '/user/create',
  data: {
    name: 'Otter',
    foo: 'JumboJS'
  }
}, response => {
  console.log(response);
});
```

# License

MIT - see LICENSE

