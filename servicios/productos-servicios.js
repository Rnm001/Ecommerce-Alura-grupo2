const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const creaproducto = (name, imageUrl, price, description) => {
    return fetch ("http://localhost:3000/producto",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name,
            imageUrl,
            price,
            description,
            id: uuid.v4()
            
        })
    })
    .then( respuesta => {
        if(respuesta.ok){
        return respuesta.body
    }
    throw new Error ("No fue posible crear un producto")
    })
}

const eliminarProducto = (id) => {
    console.log("Eliminar a -->", id)
    return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
})
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(( respuesta ) =>
    respuesta.json());
}

    const actualizarProducto = (name, imageUrl, price, description, section, id) => {
        return fetch (`http://localhost:3000/producto/${id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name,
                imageUrl,
                price,
                description,
                section,
                
            })
    
        })
        .then( respuesta => {
            if(respuesta.ok){
            return respuesta.body
        }
        throw new Error ("No fue posible crear un producto")
    })
};


export const productoServices = {
    listaProductos,
     creaproducto,
     eliminarProducto,
     detalleProducto,
     actualizarProducto,
}

