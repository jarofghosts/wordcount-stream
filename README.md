wordcount-stream
====

[![Build Status](https://travis-ci.org/jarofghosts/wordcount-stream.svg)](https://travis-ci.org/jarofghosts/wordcount-stream)

a stream that acts like `wc`

## usage

```js
var wc_stream = require('wordcount-stream')
  , fs = require('fs')

var wc = wc_stream()

wc.write('tu tu') // ->
// {
//     characters: 5
//   , words: 2
//   , lines: 1
// }
```

## notes

optionally accepts as a callback as the only argument. if provided, counts
will not be streamed as received, but instead the total will be passed to the
callback (in the same form as outlined above).

## license

MIT
