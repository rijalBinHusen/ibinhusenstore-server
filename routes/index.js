const router = require('express').Router()
const controller = require('../controller/index')

module.exports = app => {
    router.get('/provinsi', controller.provinsi)
    router.get('/', controller.hello)
    router.get('/kota/:provId', controller.kotaLists )

    app.use('/', router)
}