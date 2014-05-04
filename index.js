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

    var word_rex = /\s*(\w+)\s*/g
      , line_rex = /\n/g

    var count = {}

    count.characters = data.length
    count.words = (data.match(word_rex) || []).length
    count.lines = (data.match(line_rex) || []).length + 1

    if(done) {
      counts.characters += count.characters
      counts.words += count.words
      counts.lines += count.lines
    } else {
      stream.queue(count)
    }
  }

  function end() {
    if(done) done(counts)
    stream.queue(null)
  }
}
