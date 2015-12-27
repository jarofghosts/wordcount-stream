# wordcount-stream

[![Build Status](http://img.shields.io/travis/jarofghosts/wordcount-stream.svg?style=flat-square)](https://travis-ci.org/jarofghosts/wordcount-stream)
[![npm install](http://img.shields.io/npm/dm/wordcount-stream.svg?style=flat-square)](https://www.npmjs.org/package/wordcount-stream)
[![npm version](https://img.shields.io/npm/v/wordcount-stream.svg?style=flat-square)](https://www.npmjs.org/package/wordcount-stream)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/wordcount-stream.svg?style=flat-square)](https://github.com/jarofghosts/wordcount-stream/blob/master/LICENSE)

a stream that acts like `wc`

## usage

```js
var wcStream = require('wordcount-stream')

var wc = wcStream()

wc.write('tu tu') // ->
// {
//     characters: 5
//   , words: 2
//   , lines: 1
// }
```

## notes

optionally accepts a callback as the only argument. if provided, counts will
not be streamed as received, but instead the total will be passed to the
callback (in the same form as outlined above).

```js
var wcStream = require('wordcount-stream')

var wc = wcStream(done)

wc.write('tu ')
wc.write('tu')
wc.end()

function done (data) {
  console.log(data) // ->
  // {
  //   characters: 5,
  //   words: 2,
  //   lines: 1
  // }
}
```

## license

MIT
