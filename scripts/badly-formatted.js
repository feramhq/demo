const test = 'test'
 const foo = 'foo'
var bar = 'bar'
let status = '';
const weirdObject =
 {
  foo:     'foo'
  bar: "bar",
    baz: [  1,  2, 3]
 }

// Const can't be reassigned
test = 'another test'

// Incorrect placement of ternary operator
const isTest = true
status = isTest ?
  'is a test' :
  'is not a test'

// Incorrect placement of operators
status = 'This is a'
  + 'test'

function doSomething(){
     return  1234
}

function deadCode () {
  return 'yes'
  return 'no'
}

function overwrittenVariable (foo) {
  return foo * 2
}
