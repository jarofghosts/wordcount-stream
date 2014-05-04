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

optionally, if a truthy value is passed as the first argument, counts will be
aggregated and emitted at the end of the stream (not as chunks come in).

## license

MIT
