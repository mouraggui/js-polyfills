module.exports = function (f) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    let result = f(this[i], i, this)
    arr.push(result)
  }
  return arr
}