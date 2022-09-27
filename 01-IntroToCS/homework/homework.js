'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  const binary = num.split('')

  return binary.reduce((acc, val, i, arr) => (
    acc + (val * 2**(arr.length - i - 1))
  ), 0)
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary = []

  while (Math.floor(num) !== 0) {
    binary.unshift(Math.floor(num) % 2)
    num = num / 2
  }
 
  return binary.join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}