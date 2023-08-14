import express from 'express'
import userRouter from "./routes/userRouter.js"

const api = express()
//cria rota get na raiz
api.get('/',(req, res) => {
    res.json({message: "bem vindo a nossa api"})
})

api.post('/',(req, res) => {
    res.json({message: "bem vindo a nossa api metodo post"})
})

api.put('/',(req, res) => {
    res.json({message: "bem vindo a nossa api metodo put"})
})

api.delete('/',(req, res) => {
    res.json({message: "bem vindo a nossa api metodo delete"})
})

//product
api.get('/product',(req, res) => {
    res.json({message: "bem vindo a nossa api metodo get"})
})

api.post('/product',(req, res) => {
    res.json({message: "bem vindo a nossa api metodo post"})
})

api.put('/product',(req, res) => {
    res.json({message: "bem vindo a nossa api metodo put"})
})

api.delete('/product',(req, res) => {
    res.json({message: "bem vindo a nossa api metodo delete"})
})

//api.use
api.use('/user', userRouter)

//inicializa server
api.listen(3000, () => {
    console.log('server rodando na porta 3000. http://localhost:3000')
})