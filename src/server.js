import express from 'express'
import userRouter from "./routes/userRouter.js"
import {PORT} from './config.js'
const api = express()
//cria rota get na raiz
api.get('/',(req, res) => {
    res.json({message: "bem vindo a nossa api"})
})

api.use('/user',userRouter)

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
api.listen(PORT, () => {
    console.log(`server rodando na porta ${PORT}. http://localhost:${PORT}`)
})