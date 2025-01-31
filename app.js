// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const agregarAmigo = () => {
    let campoEntrada = document.getElementById("amigo").value;
    if (campoEntrada) {
        amigos.push(campoEntrada);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    } else {
        alert("Por favor inserte un nombre");
    }
    return amigos;
};

const mostrarAmigos = () => {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
};

console.log(amigos);

const sortearAmigo = () => {
    if (amigos.length > 0) {
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[amigoSorteado]}`;
        console.log(amigoSorteado);
        console.log(amigos[amigoSorteado]);
    } else {
        alert("No hay amigos por sortear");
    }
};

sortearAmigo();
