function add(lista) {
  console.log(lista);
  if (localStorage.getItem("produto")) {
    let listaProdutos = JSON.parse(localStorage.getItem("produto"));
    listaProdutos.push(lista);
    localStorage.setItem("produto", JSON.stringify(listaProdutos));
  } else {
    let listaProdutos = [lista];
    localStorage.setItem("produto", JSON.stringify(listaProdutos));
  }
}

var carrinho = document.querySelector("#viewSessionSotorage");
let resultadoBusca = JSON.parse(localStorage.getItem("produto"));
for (let index = 0; index < resultadoBusca.length; index++) {
  let dados = JSON.parse(resultadoBusca[index]);
  carrinho.innerHTML += `<div class='linhaCarrinho'><p class='nomeProduto' >
  ${dados.nome} </p><p class='precoProduto'> R$${dados.preco} </div>`;
}

let totalHtml = document.getElementById("total");
let totalNumber = 0;
for (let index = 0; index < resultadoBusca.length; index++) {
  let dados = JSON.parse(resultadoBusca[index]);
  totalNumber += dados.preco;
}

if (localStorage.getItem("produto")) {
  totalHtml.innerText = "Total = R$" + totalNumber;
} else {
  totalHtml.innerText = "Total = R$ 0.00";
}

function cancelar() {
  localStorage.clear();
  document.location.reload(true);
  window.location = "http://localhost:3000/index";
  return;
}

function finalizar() {
  if (localStorage.getItem("produto")){
    localStorage.clear();
    document.location.reload(true);
    window.location = "http://localhost:3000/index";
    alert('Compra finalizada com sucesso!')
  } else {
    localStorage.clear();
    document.location.reload(true);
    window.location = "http://localhost:3000/index";
    alert('O carrinho esta vazio!')
  }
  return;
}