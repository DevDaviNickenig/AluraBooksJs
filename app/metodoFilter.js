// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront)

const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  // let livrosFiltrados = livros.filter(livros => livros.categoria == categoria)
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
  exibirOsLivrosNaTela(livrosFiltrados)
  if (categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivroDisponeiveis(livrosFiltrados)
    console.log(valorTotal)
    exibirValorTotalDosLivrosDisponeiveisNaTela(valorTotal)
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponeiveisNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
}


