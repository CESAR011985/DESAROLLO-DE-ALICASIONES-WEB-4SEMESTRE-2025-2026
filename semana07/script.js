// Arreglo de productos
let productos = [
    {
        nombre: "Taladro Eléctrico",
        precio: 157,
        descripcion: "Taladro de uso industrial para tabajo semi pesado"
    },
    {
        nombre: "Compresor de aire",
        precio: 140,
        descripcion: "para pintar "
    },
    {
        nombre: "Soldadora",
        precio: 370,
        descripcion: "Soldadora eléctrica compacta 15 kg uso industrial"
    },
    {
         nombre: "Amoladora angular de 4 pulgadas y media uso industrial",
        precio: 130,
        descripcion: "Para corte y desbaste"
    },


];

// Referencia a la lista
const lista = document.getElementById("listaProductos");
const botonAgregar = document.getElementById("btnAgregar");

// Función para renderizar productos
function renderizarProductos() {
    lista.innerHTML = ""; // Limpiar lista

    productos.forEach(producto => {
        const item = document.createElement("li");

        // Plantilla básica
        item.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;

        lista.appendChild(item);
    });
}

// Evento para agregar un nuevo producto
botonAgregar.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Nuevo Producto",
        precio: 50,
        descripcion: "Descripción del nuevo producto"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});

// Renderizar al cargar la página
renderizarProductos();
