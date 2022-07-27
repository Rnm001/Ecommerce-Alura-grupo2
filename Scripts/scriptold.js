
const productos1 =[ 
{nombre: 'Taza SW', precio: 61},
{nombre: 'DartVader', precio: 62},
{nombre: 'Figura Joda', precio: 63},
{nombre: 'StormTrooper', precio: 64},
{nombre: 'Fig. Goku', precio: 65},
{nombre: 'Fig. Sith', precio: 66},
{nombre: 'Joystick Xbox', precio: 67},
{nombre: 'PS5', precio: 68},
{nombre: 'Nintendo', precio: 69},
{nombre: 'Wii', precio: 70},
{nombre: 'Xbox One', precio: 71},
{nombre: 'Gameboy', precio: 72},
{nombre: 'Bandera Atari', precio: 73},
{nombre: 'T-shirt Nintendo', precio: 74},
{nombre: 'Figura Sonic', precio: 75},
{nombre: 'Despertador Retro', precio: 76},
{nombre: 'Casco VR', precio: 77},
{nombre: 'Traje Pikachu', precio: 78},
]
const formulario = document.querySelector("#search-text");
const resultado = document.querySelector("#lista-resultado")
const filtrar = ()=> {
    /*resultado.innerHTML = '';*/
    console.log(formulario.value);
    const texto = formulario.value.toLowerCase();
    for(let producto of productos1){
        let nombre = producto.nombre.toLowerCase;
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML +=`
            <li>${producto.nombre} - Valor: ${producto.precio}</li>`
            
        }
    }
    
    if(resultado.innerHTML === ''){
    resultado.innerHTML +=`
    <li>Producto no encontrado</li>`
}

}

/*lupa.addEventListener('click', filtrar);*/