var db = require('./db')

module.exports = {
  add: add,
  getList: getList
}

function add (req, res) {
  db.add(req.body, function () {
    res.sendStatus(204)
  })
}

function getList (req, res) {
  db.getList().then(res.json.bind(res))
}
