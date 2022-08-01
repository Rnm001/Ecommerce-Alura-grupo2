const buscar1 = document.querySelector(".search-button")

buscar1.addEventListener("click",() => {
    const nombreBusqueda = document.getElementById("search-text").value;
    if(nombreBusqueda == ""){
        return
    }
    else{
        window.location.href = `./resultadobusqueda.html?name=${nombreBusqueda}`;
    }
})