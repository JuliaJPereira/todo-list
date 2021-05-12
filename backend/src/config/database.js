const mongosee = require('mongoose')
mongosee.Promise = global.Promise
module.exports = mongosee.connect('mongodb://localhost/todo', (err) => {
    if(err) {
        throw new Error(err)
    }
    console.log('mongo is running')
})