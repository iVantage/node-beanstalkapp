#  [node-beanstalkapp][npm-url] (WIP)

> A node wrapper for the beanstalkapp api.


## Install

```sh
$ npm install --save ivantage/beanstalkapp
```


## Usage

```js
var Beanstalkapp = require('beanstalkapp')
  , bstalk = Beanstalkapp('subdomain', 'useranme', 'token', 'appname');

bstalk.repositories.then(function(repos) {
  // do something with repos
}, function(reason) {
  // oh no! something went wrong!
});
```


## License

MIT (c) iVantage Health Analytics


[npm-url]: https://npmjs.org/package/beanstalkapp
