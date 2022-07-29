import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-name]").value
    const url = document.querySelector("[data-url]").value
    const price = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    const categoria = document.querySelector("[data-categoria]").value

    productoServices.creaproducto(nombre,url,price,descripcion,categoria).then(respuesta => {
        window.location.href = "/catalogo.html"
        alert("El producto fue creado con exito")
        console.log(respuesta)
    }).catch( err => {
        console.log(err)
    })
})