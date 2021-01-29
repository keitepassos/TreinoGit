function clicar(){
    alert('Clicou no botão...ALTERADO!!!!!!!!!!!!')
}


var num1=document.getElementById('num1')
var num2=document.getElementById('num2');
var resultado = document.getElementById('resultado');

function calcular(opcao=''){
    
    num1 = num1.value=='' ? 0:parseFloat(num1.value);
    num2 = num2.value == '' ? 0:parseFloat(num2.value);

    //resultado.innerHTML =  num1 + num2;

    alert(num1 + num2)

}
