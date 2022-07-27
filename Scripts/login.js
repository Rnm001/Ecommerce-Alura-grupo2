

function login(){
  
    const adminUser = "admin@alura.com";
    const adminPass = "admin";
    const correo = document.querySelector("#email-text").value;
    const password = document.querySelector("#password-text").value;
    console.log(adminUser);
    console.log(adminPass);
    console.log(correo);
    console.log(password);

   
    if (correo==adminUser && password==adminPass) { 
        window.location.href = "../newProduct.html";
        } 
        else{ 
            alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
       } 
   } 
 