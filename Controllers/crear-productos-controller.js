import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-name]").value
    const imageurl = document.querySelector("[data-url]").value
    const price = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    const categoria = document.querySelector("[data-categoria]").value 

    productoServices.creaproducto(nombre,imageurl,price,descripcion,categoria).then(respuesta => {
        window.location.href = "/catalogoedit.html"
        alert("El producto fue creado con exito")
        console.log(respuesta)
    }).catch( err => {
        console.log(err)
    })
})