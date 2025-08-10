const amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome antes de adicionar!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já está na lista!");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear!");
    return;
  }

  let sorteados = [...amigos];
  let tentativas = 0;
  let valido = false;

  while (!valido && tentativas < 100) {  
    embaralhar(sorteados);
    valido = true;

    for (let i = 0; i < amigos.length; i++) {
      if (amigos[i] === sorteados[i]) {
        valido = false;
        break;
      }
    }

    tentativas++;
  }

  if (!valido) {
    alert("Não foi possível sortear sem repetir. Tente novamente.");
    return;
  }

  const ulResultado = document.getElementById("resultado");
  ulResultado.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${amigos[i]} ➝ ${sorteados[i]}`; 
    ulResultado.appendChild(li);
  }
}