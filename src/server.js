const express = require('express')

const api = express()

api.get('/',(req, res) => {
    res.json({message: "bem vindo a nossa api"})
})

api.listen(3000, () => {
    console.log('server rodando na porta 3000. http://localhost:3000')
})