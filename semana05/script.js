const inputUrl = document.getElementById("urlImagen");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const galeria = document.getElementById("galeria");

let imagenSeleccionada = null;

// Agregar imagen
btnAgregar.addEventListener("click", () => {
    const url = inputUrl.value.trim();

    if (url === "") {
        alert("Por favor ingresa una URL válida");
        return;
    }

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {
        seleccionarImagen(img);
    });

    galeria.appendChild(img);
    inputUrl.value = "";
});

// Seleccionar imagen
function seleccionarImagen(img) {
    const imagenes = document.querySelectorAll(".galeria img");

    imagenes.forEach(imagen => {
        imagen.classList.remove("seleccionada");
    });

    img.classList.add("seleccionada");
    imagenSeleccionada = img;
}

// Eliminar imagen seleccionada
btnEliminar.addEventListener("click", () => {
    if (imagenSeleccionada) {
        imagenSeleccionada.remove();
        imagenSeleccionada = null;
    } else {
        alert("Selecciona una imagen primero");
    }
});

// Evento input
inputUrl.addEventListener("input", () => {
    inputUrl.style.borderColor = "#007bff";
});


            