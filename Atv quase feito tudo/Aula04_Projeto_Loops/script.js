
/*

//while = enquanto 

var x =0;

document.write('<br> Testando o Loop com while')

while(x<10){
    document.write('<br> O valor de x é: '+x);
    //Incremento de X
    //x=x+1;
    x++;
}

//For = para

var valor=13

document.write("<br><br>Testando o loop com for");
for(a=0;a<=valor;a++){
    document.write('<br> O valor de a é: '+a);
    console.log(a*2);
}

*/

//Switch = trocar escolha (escolha)

function Pedir(){
    var valor = prompt('Digitar uma opção de 1 a 4')

    console.log(valor)
    console.log(typeof valor)
    console.log(typeof Number(valor))
    console.log(valor)

    switch(Number(valor)){
    case 1:
    alert('Você escolheu Suco');
    break;
    case 2:
    alert('Você escolheu Água gelada')
    break;
    case 3:
    alert("Você escolheu Sorvete")
    break;
    case 4:
    alert("Você escolheu chamar o Garçom")
    break;
    default:
    alert("Escolha uma opção de 1 a 4")
    break;

    }
}