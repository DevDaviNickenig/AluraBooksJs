const elementoParaInserirLivros = document.getElementById('livros')
console.log(elementoParaInserirLivros)
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDelivros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''
  listaDelivros.forEach(livro => {
    // let disponibilidade = verificarDisponibilidadeDoLivro(livro)

    let disponibilidade = livro.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel'

    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
      <h2 class="
        ${livro.titulo}">        
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `
  });
}

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livros__imagens'
//   } else {
//     return 'livros__imagens indisponivel'
//   }
// }