var through = require('through2')

module.exports = wc

function wc(done) {
  var counts = {
      characters: 0
    , words: 0
    , lines: 0
  }

  return through.obj(write, end)

  function write(data, enc, next) {
    var str = data.toString()

    var wordRex = /\s*(\w+)\s*/g
      , lineRex = /\n/g

    var count = {}

    count.characters = str.length
    count.words = (str.match(wordRex) || []).length
    count.lines = (str.match(lineRex) || []).length + 1

    if(!done) {
      this.push(count)

      return next()
    }

    counts.characters += count.characters
    counts.words += count.words
    counts.lines += count.lines

    next()
  }

  function end(finish) {
    if(done) {
      done(counts)
    }

    finish()
  }
}
