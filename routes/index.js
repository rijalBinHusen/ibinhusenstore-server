const router = require('express').Router()
const controller = require('../controller/index')

module.exports = app => {
    router.get('/', controller.hello)
    router.get('/provinsi', controller.provinsi)
    router.get('/kota/:provId', controller.kotaLists )
    router.get('/ongkir/:asal/:tujuan/:berat/:kurir', controller.ongkosKirim)

    app.use('/', router)
}