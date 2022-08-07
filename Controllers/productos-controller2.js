import { productoServices } from "../servicios/productos-servicios.js"

const nuevoProducto = (name, price, imageUrl,id) => {

    const card = document.createElement("div");
    const boxsearch = document.createElement("ul");
    const contenido = `
    <div >
    <li id="productoAparece"><a>
        <img id="productoApareceImg" src="${imageUrl}" alt ="">
            <h3 id="productoApareceName">${name}</h3>
            <p id="productoAparecePrice">${price}</p>
            <a class="aCard" id="aCardID" href="verproducto.html?id=${id}">Ver producto</a>
           </a></li> 
    </div>
    `;
    card.innerHTML = contenido;
    card.classList.add("card");

    boxsearch.innerHTML = contenido;
    boxsearch.classList.add("boxsearch");
    
    return card, boxsearch;

    
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

const productSearch = document.querySelector("[box-search]")
const render2 = async () => {
    try {
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento => {
        productSearch.appendChild(nuevoProducto(elemento.name,  elemento.price, elemento.imageUrl, elemento.id, elemento.section, ))
        });
    }catch(erro){
        console.log(erro)
    }
}


render()
render2()
