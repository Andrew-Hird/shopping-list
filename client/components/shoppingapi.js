import request from 'superagent'

export default {
  add: add,
  getList: getList
}

function add(item, cb) {
  request
  .post('/add')
  .send({item: item})
  .end((err, res) => {
    cb(err)
  })
}

function getList(cb){
  let data = []
  request
  .get('/getlist')
  .end((err, res) => {
    cb(err, res.body)
  })
}
