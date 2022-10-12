const axios = require('axios')
// Config Defaults Axios dengan Detail Akun Rajaongkir
axios.defaults.baseURL = 'https://api.rajaongkir.com/starter'
axios.defaults.headers.common['key'] = process.env.API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

exports.provinsi = (req, res) => {
    axios.get('/province')
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
}

exports.hello = (req, res) => {
    res.send('Hello world')
}

exports.kotaLists = (req, res) => {
        const id = req.params.provId
        axios.get(`/city?province=${id}`)
          .then(response => res.json(response.data))
          .catch(err => res.send(err))
}

exports.ongkosKirim = (req, res) => {
    const param = req.params
    axios.post('/cost', {
        origin: param.asal,
        destination: param.tujuan,
        weight: param.berat,
        courier: param.kurir
      })
      .then(response => res.json(response.data))
      .catch(err => res.send(err))
  }