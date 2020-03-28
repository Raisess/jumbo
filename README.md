# jumbojs CLI

A CLI for jumbojs.

## Install jumbojs CLI

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

## Creating a app new route

To create new route in your app, you must to enter in app folder and type:

```shell
$ jumbo route <routeName>
```

And your route as created in "./src/routes/<routeName>.js".

## Using jumbojs framework

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

// making a query
mysql.query(conn, 'SELECT * FROM users', (err, res) => {
  if(err) throw new Error(err);

  return console.log(res);
});

// clossing connection
mysql.close(conn);
```

#### Firebase

Using firebase driver.

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

# License

MIT - see LICENSE

