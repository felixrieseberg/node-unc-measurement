'use strict';

const perfy = require('perfy')
const path = require('path')
const fs = require('fs')

const normalPath = path.join(__dirname, 'testfile.txt')
const uncPath = `\\\\?\\${normalPath}`
const iterations = process.argv[2] || 100000

function readWriteFile(path) {
  fs.writeFileSync(path, 'Hello Node.js', 'utf8');
  const file = fs.readFileSync(path, { encoding: 'utf8' })
}

function measureNormalPathTime() {
  perfy.start('normal-read-write')
  for (let i = 0; i < iterations; i++) {
    readWriteFile(normalPath)
  }

  return perfy.end('normal-read-write').time
}


function mesaureUncTime() {
  perfy.start('unc-read-write')
  for (let i = 0; i < iterations; i++) {
    readWriteFile(uncPath)
  }

  return perfy.end('unc-read-write').time
}

// Fight!
console.log(`Reading and writing a file ${iterations} times:`)

const normalTime = measureNormalPathTime()
const uncTime = mesaureUncTime()

console.log(`With "normal" paths:      ${normalTime}`)
console.log(`With UNC paths:           ${uncTime}`)