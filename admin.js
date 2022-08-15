//Definicion de variables
const url = '(aca va la url de la API)';
const contenedor = document.querySelector('tbody');
let resultados = '';

const formArticulo = document.querySelector('form');
const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock')
let opcion = '';
const btnCrearArt = document.getElementById('btnCrearArt');


btnCrearArt.addEventListener("click", ()=>{
    document.getElementById("formART").reset();
})

const btnCrearUsuario = document.getElementById('btnCrearUsuario');


btnCrearUsuario.addEventListener("click", ()=>{
    document.getElementById("formUsuario").reset();
})

const btnCrearCat = document.getElementById('btnCrearCat');

btnCrearCat.addEventListener("click",()=>{
    document.getElementById("formCat").reset();
});

const btnCrearPedido = document.getElementById('btnCrearPedido');

btnCrearPedido.addEventListener("click",()=>{
    document.getElementById("formPedido").reset();
});