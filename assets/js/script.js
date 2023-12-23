//FUNCION ORIGINAL
//function pintar(){
//    ele.style.backgroundColor='yellow'
//}
//
//const ele=document.getElementById("ele1")
//ele.addEventListener("click",pintar)

//FUNCION MODIFICADA(recibir el elemento sin volver a llamar en la funcion)
//const ele=document.getElementById("ele1")
//ele.addEventListener("click",function(){
//    ele.style.backgroundColor='yellow'
//})


//FUNFION MODIFICADA (argumento)
const ele=document.getElementById("ele1")

function pintar(click,color="green"){
    click.style.backgroundColor=color
}

pintar(ele)

ele.addEventListener("click",function(){
        ele.style.backgroundColor='yellow'
})