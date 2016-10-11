module.exports = {
  add: add,
  getList: getList
}

var shoppingList = []

var list = [
  ['bread', 'rolls'],
  ['carrot', 'lettuce'],
  ['prawns', 'milk'],
  ['chips', 'crackers']
]
// var list = [
//   [],
//   [],
//   [],
//   []
// ]

function add (item, cb) {
  if(item.cat === 'bakery') {
    list[0].push(item.item)
  } else if(item.cat === 'produce') {
    list[1].push(item.item)
  } else if(item.cat === 'chilled') {
    list[2].push(item.item)
  } else if(item.cat === 'other') {
    list[3].push(item.item)
  }
  cb()
}

function getList () {
  return new Promise(function (resolve) {
    resolve(list)
  })
}
