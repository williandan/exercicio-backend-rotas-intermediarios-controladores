const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"]
let i = 0
const vezDoJogador = (req, res) => {
  const jogador = jogadores[i]
  i++

  if (i >= jogadores.length) {
    i = 0
  }

  return res.send(`É a vez do ${jogador} jogar!`)
}

const consultar = (req, res) => {
  res.send(jogadores)
}
const adicionar = (req, res) => {
  let nomeJogador = req.query.nome
  const indiceDoArray = Number(req.query.indice)

  nomeJogador = `${nomeJogador[0].toUpperCase()}${nomeJogador.slice(1).toLowerCase()}`

  if (isNaN(indiceDoArray)) {
    jogadores.push(nomeJogador)
    return res.send(jogadores)
  }

  if (indiceDoArray >= jogadores.length) {
    return res.send(`Não existe jogador no indice informado (${indiceDoArray}). Novo jogador não pode ser adicionado.`)
  }

  jogadores.splice(indiceDoArray, 0, nomeJogador);
  res.send(jogadores)

}
const remover = (req, res) => {
  const indiceDoArray = Number(req.query.indice)

  if (indiceDoArray >= jogadores.length) {
    return res.send(`Não existe jogador no indice informado (${indiceDoArray}) para ser removido.`)
  }

  jogadores.splice(indiceDoArray, 1)

  res.send(jogadores)
}

module.exports = { vezDoJogador, consultar, adicionar, remover }