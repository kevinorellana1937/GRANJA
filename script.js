let pantalla = document.getElementById('pantalla');
let resultado = document.getElementById('resultado');
function agregar(valor) {
    if (pantalla.value === '0' && valor !== '.') {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}
function calcular() {
    try {
        let expresion = pantalla.value;
        let res = eval(expresion);
        resultado.value = res;
    } catch (error) {
        resultado.value = 'Error';
    }
}
function limpiar() {
    pantalla.value = '0';
    resultado.value = '';
}