const form = document.querySelector('#form');
const tabela = document.querySelector('#tbody')
let idx = form.idx.value


const atualizarLocalStorage = (produtos) => {
  localStorage.setItem('produtos', JSON.stringify(produtos))
}

const recuperarLocalStorage = () => JSON.parse(localStorage.getItem('produtos') || '[]')



const salvarProduto = () => {

  //pegar os dados do formulario
  const name = form.name.value;
  const price = Number(form.price.value)
  const prime = form.prime.checked;


  if (idx == 'novo') {
    const produtos = recuperarLocalStorage();
    produtos.push({ id: produtos.length + 1, name, price, prime });
    atualizarLocalStorage(produtos);
    preencherTabela();
    form.reset();

  } else {
    let produto = { id: idx, name, price, prime }

    atualizarProduto(idx, produto)
    preencherTabela();
    form.reset();
    idx = 'novo'
  }





}

const removerProduto = (id) => {
  const produtos = recuperarLocalStorage();
  const indexProduto = produtos.findIndex((produto) => produto.id === id)
  if (indexProduto < 0) return;
  produtos.splice(indexProduto, 1)
  atualizarLocalStorage(produtos)
  alert("produto removido")
  preencherTabela();

}


const preencherTabela = () => {
  const produtos = recuperarLocalStorage();
  for (const produto of produtos) {
    tabela.innerHTML += `

    <tr>
    <td>${produto.id}</td>
    <td>${produto.name}</td>
    <td>${produto.price}</td>
    <td>${produto.prime ? "SIM" : "NÃO"}</td>
    <td>
            <Button onclick="removerProduto(${produto.id})"> <i class="bi bi-trash3-fill"></i> </button>
            <button onclick="editarProduto(${produto.id})"> <i class="bi bi-pencil-fill"></i> </button>
    </td>
    
    </tr>
    
    `;
  }
}

const editarProduto = (id) => {
  const produtos = recuperarLocalStorage();
  const indexProduto = produtos.findIndex((produto) => produto.id === id)
  form.name.value = produtos[indexProduto].name;
  form.price.value = produtos[indexProduto].price;
  form.prime.checked = produtos[indexProduto].prime;
  idx = id
}

const atualizarProduto = (id, produto) => {
  const produtos = recuperarLocalStorage();
  const indexProduto = produtos.findIndex((p) => p.id === id)
  produtos[indexProduto] = produto
  atualizarLocalStorage(produtos)

}





form.addEventListener('submit', (e) => {
  e.preventDefault()
  salvarProduto();
});

document.addEventListener('DOMContentLoaded', preencherTabela);