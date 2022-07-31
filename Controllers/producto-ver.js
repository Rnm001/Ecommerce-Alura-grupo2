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
        
        
        document.getElementById("nuevaFoto").src=(producto.imageUrl);
        document.getElementById("textoBannerh3").h3=(producto.name);

        console.log(producto.imageUrl);
        console.log(producto.name);
    });
    
}

obtenerInformacion();




;