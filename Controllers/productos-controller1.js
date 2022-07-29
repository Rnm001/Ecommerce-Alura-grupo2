



import { productoServices } from "../servicios/productos-servicios.js"

const nuevoProducto = (name, price, imageUrl) => {

    const card = document.createElement("div");
    const contenido = `
    <div >
        <img src="${imageUrl}" alt ="">
            <h3>${name}</h3>
            <p>${price}</p>
            <a href="">Ver producto</a>
            <img id="btn-edit-card" src="../assets/lapicito.png"></img>
            <img id="btn-del-card" src="../assets/Tachito.png" ></img>
            
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
        productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.section))
        });
    }catch(erro){
        console.log(erro)
    }
}

render()














