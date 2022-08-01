import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");


const obtenerInformacion = () =>{
    const url = new URL(window.location);
    const name = url.searchParams.get("name");

    if(name  == null){
        alert("ocurrio un error");
    }

    
    const imageUrl = document.querySelector("[data-url]")
    const price = document.querySelector("[data-precio]")
    const description = document.querySelector("[data-descripcion]")
    const section = document.querySelector("[data-categoria]")

    console.log(name, imageUrl, price, description, section)

    productoServices.detalleProductoNombre (name).then (producto => {
        name.value = producto.name;
        imageUrl.value = producto.imageUrl;
        price.value = producto.price;
        description.value = producto.description;
        section.value = producto.section;
    });
        
}

obtenerInformacion();

//form.addEventListener("submit", (evento) => {
   // evento.preventDefault()
    //const url = new URL(window.location);
    //const name = url.searchParams.get("name");

    //const imageUrl = document.querySelector("[data-url]").value
    //const price = document.querySelector("[data-precio]").value
    //const description = document.querySelector("[data-descripcion]").value
    //const section = document.querySelector("[data-categoria]").value 
    //console.log(name, imageUrl, price, description, section)
//    productoServices.detalleProductoNombre(name, imageUrl, price, description, section, id )

//});

