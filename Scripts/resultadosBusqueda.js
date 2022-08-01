//import { funciones } from "../Scripts/funciones.js";
import { productoServices } from "../servicios/productos-servicios.js";

//const name = funciones.obtenerInformacion("name");
//const titulo = document.querySelector("[data-titulo-busqueda]")

//titulo.textContent = `Resultados encontrados de "${name}"`

//funciones.mostrarProductosNombre(espacioContainer,name,ubicacionCantidad)

//obtenerInformacion.obtenerInformacion(name,imageUrl,price,description,section)
const obtenerInformacion1 = () =>{
    const url = new URL(window.location);
    const name = url.searchParams.get("name");
    console.log(name)
   // if(name1 == null){
     //   alert("ocurrio un error");
    //}

    //const name = document.querySelector("[data-name]")
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
        
        
       // document.getElementById("nuevaFoto").src=(producto.imageUrl);
       // document.getElementById("textoBannerh3").h3=(producto.name);

        console.log(producto.imageUrl);
        console.log(producto.name);
    });
    
}

obtenerInformacion1();