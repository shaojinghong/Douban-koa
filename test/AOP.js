
function fun(str) {
  console.log(str)
}

Function.prototype.before = function(funBe) {
  funBe()
  this(arguments)
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

fun('jinghong') //  before function, After function current function

