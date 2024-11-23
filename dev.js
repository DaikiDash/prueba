let contador = 0;
let texto = document.getElementById('score');
function joda(){
contador += 1;
texto.textContent = contador;
if(contador > 20){
alert("JAJA perdiste 10 segundos de tu vida");
}
}