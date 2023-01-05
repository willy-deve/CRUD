document.querySelector('#logar').addEventListener('click', (e) => {
  e.preventDefault
  entrar()
})


function entrar() {
  let email = document.querySelector('#email');
  let senha = document.querySelector('#password');

  let listaUser = [];

  let usuarioValido = {
    email: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('usuarios'));

  listaUser.forEach(item => {
    if (email.value === item.email && senha.value === item.senha) {
      usuarioValido = {
        id: item.id,
        email: item.email,
        senha: item.senha
      }
    }
  })

  if (email.value === usuarioValido.email && senha.value === usuarioValido.senha) {
    alert("entrando")
    window.location.href = 'recados.hml'
  } else {
    alert("algo deu errado")
  }




}