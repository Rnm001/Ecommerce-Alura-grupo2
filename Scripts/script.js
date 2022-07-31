//script de busqueda por li (lista)//
//inputSearch = document.getElementById("search-text");

//document.getElementById("search-text").addEventListener("keyup", buscador_interno);

//function buscador_interno(){

  //  filter = inputSearch.value.toUpperCase();
    //div = card.geElementByTagName("div");

    //for (i = 0; i <li.lenght; i++){
        
      //  h3= div[i].getElementByTagName("h3")[0];
//        textValue = a.textContent || a.innerText;

  //      if(textValue.toUpperCase().indexOf(filter) > -1){
    //        li[i].style.display = "";
    //}else{
      //  div[i].style.display = "none";
    //}
  //}
//}

//script de busqueda por li (lista)//
inputSearch = document.getElementById("search-text");

document.getElementById("search-text").addEventListener("keyup", buscador_interno);

function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    li = card.geElementByTagName("li");

    for (i = 0; i <li.lenght; i++){
        
        h3= div[i].getElementByTagName("h3")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
    }else{
        li[i].style.display = "none";
    }
  }
}