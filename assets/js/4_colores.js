//DOM
const blue=document.getElementById("blue")
const red=document.getElementById("red")
const green=document.getElementById("green")
const yellow=document.getElementById("yellow")
const black=document.getElementById("black")

//VARIABLES
let state1=true
let state2=true
let state3=true
let state4=true
const color='black'

//FUNCIONES
function changeblue(){
    if (state1==true){
        blue.style.backgroundColor=color
        state1=false
    }else{
        blue.style.backgroundColor='blue'
        state1=true
    }
}

function changered(){
    if (state2==true){
        red.style.backgroundColor=color
        state2=false
    }else{
        red.style.backgroundColor='red'
        state2=true
    }
}

function changegreen(){
    if (state3==true){
        green.style.backgroundColor=color
        state3=false
    }else{
        green.style.backgroundColor='green'
        state3=true
    }
}

function changeyellow(){
    if (state4==true){
        yellow.style.backgroundColor=color
        state4=false
    }else{
        yellow.style.backgroundColor='yellow'
        state4=true
    }
}

//EVENTOS
blue.addEventListener("click",changeblue)
red.addEventListener("click",changered)
green.addEventListener("click",changegreen)
yellow.addEventListener("click",changeyellow)

document.addEventListener('keydown',function(event){
    if(event.key==='a'||event.key==='A'){
        black.style.backgroundColor=color
    }else if(event.key==='s'||event.key==='S'){
        black.style.backgroundColor='white'
    }
})