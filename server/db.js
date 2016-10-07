module.exports = {
  add: add,
  getList: getList
}

var shoppingList = []

function add (item, cb) {
  shoppingList.push(item)
  console.log(shoppingList)
  cb()
}

function getList () {
  return new Promise(function (resolve) {
    resolve(shoppingList)
  })
}
