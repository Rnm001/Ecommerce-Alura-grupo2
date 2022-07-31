import { productoServices } from "../servicios/productos-servicios.js"

const nuevoProducto = (name, price, imageUrl,id) => {

    const card = document.createElement("div");
    const contenido = `
    <div >
        <img src="${imageUrl}" alt ="">
            <h3>${name}</h3>
            <p>${price}</p>
            <a class="aCard" href="verproducto.html?id=${id}">Ver producto</a>
            
    </div>
    `;
    card.innerHTML = contenido;
    card.classList.add("card");
    return card;
};

const productos = document.querySelector("[datos-productos]")

const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento => {
        productos.appendChild(nuevoProducto(elemento.name,  elemento.price, elemento.imageUrl, elemento.id, elemento.section, ))
        });
    }catch(erro){
        console.log(erro)
    }
}

render()
