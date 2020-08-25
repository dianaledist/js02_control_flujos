var numero=prompt('Hola! Vamos a jugar un poco! Por favor, ingresá un número que se te ocurra');

if (numero=="") {
    console.log('No has ingresado información. Por favor, ingresá un número.');
}

if(numero>1000) {
    alert('El número ingresado es mayor a 1000!');
}

if(numero<=1000) {
    console.log('Debes ingresar un número mayor a 1000')
}

var texto=prompt('Ahora ingresá una palabra de 4 letras que se usa para saludar a la gente. No te olvides de iniciarla con mayúscula.');

if(texto=='Hola') {
    console.log('Has adivinado! La palabra era "Hola"!');
}
else {
    console.log('No has adivinado la palabra.');
}

var numeroEval=prompt('No te vayas, último pedido! Ingresá un número del 1 al 100 a ver si adivinás el rango oculto');

if (numeroEval>=10 && numeroEval<=50) {
    alert('Muy bien! Has ingresado un número entre 10 y 50');
}
else {
    console.warn('Debes ingresar un número del 1 al 100 que se encuentre en el rango oculto!');
}