let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosdaAPI()

async function getBuscarLivrosdaAPI() {
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  exibirOsLivrosNaTela(livrosComDesconto)
}




