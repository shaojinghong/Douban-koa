
function fun() {
  console.log('current function')
}

Function.prototype.before = function(funBe) {
  funBe()
  this()
  return this
}

Function.prototype.after = function(funAf) {
  return funAf
}

fun = fun.before(() => {
  console.log('before function')
}).after(() => {
  console.log('After function')
})

fun() //  before function, After function current function

