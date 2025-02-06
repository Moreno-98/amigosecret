ArrayAmigos = [];

function agregarAmigo() {
  nomAmigo = document.getElementById("amigo").value;

        if (nomAmigo.trim() === "") {
            alert("Ingrese el nombre");
        } else {

            ArrayAmigos.push(nomAmigo);

            document.querySelector("#amigo").value = "";
            ActualizarLista();
        }
}


function ActualizarLista() {
  listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

        for (let index = 0; index < ArrayAmigos.length; index++) {
            element = ArrayAmigos[index];

            listaHTML = document.createElement("li");
            listaHTML.textContent = element;

            
            listaAmigos.appendChild(listaHTML);
        }
}


function sortearAmigo() {
  cantidadAmigos = ArrayAmigos.length;
        if (cantidadAmigos === 0) {
            alert("Ingresa nombre");

        } else {
            indiceAmigo = Math.floor(Math.random() * cantidadAmigos);

            resultadoHTML = document.querySelector("#resultado");
            resultadoHTML.innerHTML = "Amigo secreto es:" + ArrayAmigos[indiceAmigo];
        }
}
