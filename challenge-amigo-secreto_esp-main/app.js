// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios innecesarios

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombre.length > 50) {
        alert("El nombre no puede superar los 50 caracteres.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    actualizarLista(); // Actualizar la lista en pantalla
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista en la pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el Amigo Secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear");
        return;
    }
 // Elegir un nombre aleatorio del array
 const indiceAleatorio = Math.floor(Math.random() * amigos.length);
 const amigoSeleccionado = amigos[indiceAleatorio];

 // Mostrar el resultado en pantalla
 mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el nombre sorteado
function mostrarResultado(nombre) {
 const listaResultado = document.getElementById("resultado");
 listaResultado.innerHTML = ""; // Limpiar resultados anteriores

 const li = document.createElement("li");
 li.textContent = `El amigo secreto es: ${nombre}`;
 listaResultado.appendChild(li);
}
    



