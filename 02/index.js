const express = require("express")
const { vezDoJogador, consultar, adicionar, remover } = require("./controladores/rodadas")

const app = express()

app.get("/", vezDoJogador)
app.get("/consultar", consultar)
app.get("/remover", remover)
app.get("/adicionar", adicionar)

app.listen(8000)