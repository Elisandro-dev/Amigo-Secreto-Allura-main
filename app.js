let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (amigos.includes(nome)) {
        alert("Este amigo já foi adicionado!");
        input.value = "";
        return;
    }

    if (nome === "" || !isNaN(nome)) {
        alert("O nome que você inseriu não é válido! Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    exibirAmigos();
    input.value = "";
}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        
        itemLista.style.color = "#0b0909";
        itemLista.style.fontSize = "22px";
        itemLista.style.fontWeight = "bold";

        lista.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para o sorteio!");
        return;
    }

    const numeroTotalDeAmigos = amigos.length;
    const posicaoSorteada = Math.floor(Math.random() * numeroTotalDeAmigos);
    const amigoSorteado = amigos[posicaoSorteada];

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    const itemLista = document.createElement("li");
itemLista.textContent = `Seu amigo secreto é : ${amigoSorteado} !` ;

itemLista.style.color = "#070707";
itemLista.style.fontSize = "32px";
itemLista.style.fontWeight = "bold";

lista.appendChild(itemLista);
}