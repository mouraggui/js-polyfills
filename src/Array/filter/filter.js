module.exports = function (f) {
  const arr = []

  for (let i = 0; i < this.length; i++) {
    let result = f(this[i], i, this)
    if (result) {
      arr.push(this[i])
    }
  }
  return arr
}