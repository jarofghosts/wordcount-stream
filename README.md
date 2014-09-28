wordcount-stream
====

[![Build Status](https://travis-ci.org/jarofghosts/wordcount-stream.svg)](https://travis-ci.org/jarofghosts/wordcount-stream)

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

function done(data) {
  console.log(data) // ->
  // {
  //     characters: 5
  //   , words: 2
  //   , lines: 1
  // }
}
```

## license

MIT
