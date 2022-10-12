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