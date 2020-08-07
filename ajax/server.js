const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')
const porta = 8081

app.use(express.static('.')) //chama os arquivos estaticos da pasta atual
app.use(bodyParser.json()) // faz p parser se vier como json
app.use(bodyParser.urlencoded({ extended: true })) //se vier como get

//app.get("/teste", (res) => res.send('Talkey')) //para fins de teste

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        }
        res.end('Concluido com sucesso.')
    })
})
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})
app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'

    })
})


app.listen(porta, () => console.log('Tá rolando a executagem !')) //atribuindo a porta