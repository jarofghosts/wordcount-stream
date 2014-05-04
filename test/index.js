var wc = require('../')

var test = require('tape')

test('counts words lines and characters', function(t) {
  var result = []
    , wcs = wc()

  t.plan(1)

  wcs.on('data', function(data) {
    result.push(data)
  })

  wcs.on('end', function() {
    t.deepEqual(
        result
      , [
            {characters: 4, words: 1, lines: 1}
          , {characters: 12, words: 3, lines: 1}
          , {characters: 20, words: 4, lines: 6}
          , {characters: 0, words: 0, lines: 1}
        ]
    )
  })

  wcs.write('lawl')
  wcs.write('derp dee doo')
  wcs.write('ha\ncheck\nit\nouuuut\n\n')
  wcs.write('')
  wcs.end()
})

test('counts words lines and characters', function(t) {
  var wcs = wc(true)
    , result

  t.plan(1)

  wcs.on('data', function(data) {
    result = data
  })

  wcs.on('end', function() {
    t.deepEqual(result, {characters: 36, words: 8, lines: 9})
  })

  wcs.write('lawl')
  wcs.write('derp dee doo')
  wcs.write('ha\ncheck\nit\nouuuut\n\n')
  wcs.write('')
  wcs.end()
})
