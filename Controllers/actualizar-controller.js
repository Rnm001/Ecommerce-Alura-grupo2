import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");


const obtenerInformacion = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        alert("ocurrio un error");
    }

    const name = document.querySelector("[data-name]")
    const imageUrl = document.querySelector("[data-url]")
    const price = document.querySelector("[data-precio]")
    const description = document.querySelector("[data-descripcion]")
    const section = document.querySelector("[data-categoria]")

    console.log(name, imageUrl, price, description, section)

    productoServices.detalleProducto(id).then (producto => {
        name.value = producto.name;
        imageUrl.value = producto.imageUrl;
        price.value = producto.price;
        description.value = producto.description;
        section.value = producto.section;
    });
        
}

obtenerInformacion();

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const name = document.querySelector("[data-name]").value
    const imageUrl = document.querySelector("[data-url]").value
    const price = document.querySelector("[data-precio]").value
    const description = document.querySelector("[data-descripcion]").value
    const section = document.querySelector("[data-categoria]").value 
    console.log(name, imageUrl, price, description, section)
    productoServices.actualizarProducto(name, imageUrl, price, description, section, id )

});