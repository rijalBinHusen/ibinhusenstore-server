# express, rest-api
API Server ibinhusenstore.

## API spec :

| Methods  | Urls | Actions |
| ------------- | ------------- | ------------- |
| GET | /provinsi | Mendapatkan daftar nama provinsi di indonesia |
| GET | /kota/:idProvinsi | Mendapatkan daftar kota berdasarkan id provinsi|
| GET | /ongkos/:asal/:tujuan/:berat/:kurir' | Mendapatkan ongkos kirim |