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

# License

MIT - see LICENSE

