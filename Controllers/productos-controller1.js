import { productoServices } from "../servicios/productos-servicios.js"

const nuevoProducto = (name, price, imageUrl, id) => {
    const card = document.createElement("div");
    const contenido = `
    <div >
        <img src="${imageUrl}" class="imgClass" alt ="">
            <h3>${name}</h3>
            <p>${price}</p>
            <a class="aCard" href="verproducto.html?id=${id}">Ver producto</a>
            <a href="editProduct.html?id=${id}"><img class="btn-edit-card" src="../assets/lapicito.png" href="editProduct.html?id=${id}"></img></a>"
            <button class="btn-del-card" id="${id}"> <img class="btn-del-card1" src="../assets/Tachito.png"></img></button>
            
    </div>
    `;
    card.innerHTML = contenido;
    const btn = card.querySelector(".btn-del-card");
    btn.addEventListener("click",() =>{
        const id = btn.id
        productoServices.eliminarProducto(id).then(( respuesta ) =>{
    console.log(respuesta);
})
.catch((err) => alert("Ocurrio un error"));
    })
    
    
    card.classList.add("card");
    return card;
};

const productos = document.querySelector("[datos-productos]")

const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id,))
        });
        
    }catch(erro){
        console.log(erro)
        
    }
}
render()















