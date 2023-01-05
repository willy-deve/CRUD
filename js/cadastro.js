document.querySelector('#cadastro').addEventListener('click', (e) => {
  e.preventDefault();

  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value

  salvar(name, email, password)
})

function salvar(name, email, password) {
  let db = JSON.parse(localStorage.getItem('usuarios') || '[]');

  let usuario = {
    id: db.length + 1,
    name: name,
    email: email,
    password: password
  }

  db.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(db))
  location.href = 'login.html'
}