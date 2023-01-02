const form = document.querySelector('#form');
const tabela = document.querySelector('#tbody')


const atualizarLocalStorage = (produtos) => {
  localStorage.setItem('produtos', JSON.stringify(produtos))
}

const recuperarLocalStorage = () => {

  const produtos = JSON.parse(localStorage.getItem('produtos')) || []
}

const salvarProduto = () => {
  const nome = form.nome.value;
  const preco = Number(form.preco.value)
  const prime = form.prime.checked;

  const produtos = recuperarLocalStorage();
  produtos.push({ id: produtos.length + 1 })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  salvarProduto();
})