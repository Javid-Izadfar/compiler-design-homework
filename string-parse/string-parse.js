const fs = require('fs')
let inputs = process.argv.slice(2)
let outputs = new Object()

inputs.givenString = inputs[0] ? String(inputs[0]) : 'Lorem'
inputs.functionType = inputs[1] ? inputs[1].toLowerCase() : 'all'

if (inputs.functionType == 'prefix') {
  findPrefix(inputs.givenString)
} else if (inputs.functionType == 'suffix') {
  findSuffix(inputs.givenString)
} else if (inputs.functionType == 'substring') {
  findSubStr(inputs.givenString)
} else if (inputs.functionType == 'subsequence') {
  findSubSeq(inputs.givenString)
} else if ( inputs.functionType == 'all') {
  findPrefix(inputs.givenString)
  findSuffix(inputs.givenString)
  findSubStr(inputs.givenString)
} else {
  console.log('Oops! please ask a real question');
}

function findPrefix(string) {
  outputs.prefixes = ['ε']
  for (var i = 1; i <= string.length; i++) outputs.prefixes.push('\'' + string.substr(0, i) + '\'')
  writeResult(outputs.prefixes, 'Prefixes')
}
function findSuffix(string) {
  outputs.suffixes = []
  for (var i = 0; i < string.length; i++) outputs.suffixes.push('\'' + string.substr(i, string.length) + '\'')
  outputs.suffixes.push('ε')
  writeResult(outputs.suffixes, 'Suffixes')
}
function findSubStr(string) {
  outputs.substring = ['ε']
  for (var i = 0; i < string.length; i++) {
    for (var j = string.length - i; j >= 1 ; j--) outputs.substring.push('\'' + string.substr(i, j) + '\'')
  }
  writeResult(outputs.substring, 'Substring')
}
function findSubSeq(string) {
  console.log('write subsequence');
}

function writeResult(result, type){

  console.log( type + ' of "' + inputs.givenString +'" are: ');
  console.log('{' + result.toString() + '}');
  console.log('\n');
}
