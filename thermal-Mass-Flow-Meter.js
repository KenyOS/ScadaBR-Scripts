// Total = (Total of more than one hundred(Inteiro)) * 100 + (Total of less than one hundred)

var a = p662.value;
var b = p664.value;

var calculo=(Math.floor(a)*100)+(b+(a-Math.floor(a)));

var arredondado = parseFloat(calculo.toFixed(4));
return arredondado;
