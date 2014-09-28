var through = require('through')

module.exports = wc

function wc(done) {
  var stream = through(write, end)
    , counts

  counts = {
      characters: 0
    , words: 0
    , lines: 0
  }

  return stream

  function write(_data) {
    var data = '' + _data

    var wordRex = /\s*(\w+)\s*/g
      , lineRex = /\n/g

    var count = {}

    count.characters = data.length
    count.words = (data.match(wordRex) || []).length
    count.lines = (data.match(lineRex) || []).length + 1

    if(!done) return stream.queue(count)

    counts.characters += count.characters
    counts.words += count.words
    counts.lines += count.lines
  }

  function end() {
    if(done) done(counts)

    stream.queue(null)
  }
}
