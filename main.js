const colors = ["green", "red", "lightcoral", "orange", "blue", "aqua", "brown", "crimson", "greenyellow", "indigo"];

const $btn = document.getElementById('btn');
const $color = document.querySelector('.color');

$btn.addEventListener('click', ()=>{
    // generamos un numero aleatorio que sera una posicion de array
    const numAleatorio = getRamdomNumber();
    // cambiamos el color del fondo
    document.body.style.backgroundColor = colors[numAleatorio];

    $color.textContent = colors[numAleatorio];
})


function getRamdomNumber(){
    return Math.floor(Math.random() * colors.length);
}