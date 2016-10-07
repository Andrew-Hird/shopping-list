module.exports = {
  add: add,
  getList: getList
}

var shoppingList = [
  {cat: "bakery", item: "bread"},
  {cat: "produce", item: "carrot"},
  {cat: "chilled", item: "prawns"},
  {cat: "other", item: "chips"},

]

function add (item, cb) {
  shoppingList.push(item)
  cb()
}

function getList () {
  return new Promise(function (resolve) {
    resolve(shoppingList)
  })
}
