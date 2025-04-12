var pantalla = document.getElementById('pantalla');
function mostrar(valor){
    pantalla.value += valor;

}
function borrar(){
    pantalla.value = '';
}
function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        alert('Error en la expresión: ' + error.message);
        pantalla.value = '';
    }
}
// Removed duplicate code to avoid redundancy
var pantalla = document.getElementById('pantalla');

function mostrar(valor) {
    pantalla.value += valor;
}

function borrar() {
    pantalla.value = '';
}

function calcular() {
    try {
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;

        // Verificar si el resultado es 0, positivo o negativo
        if (resultado === 0) {
            alert("El resultado es igual a 0.");
        } else if (resultado > 0) {
            alert("El resultado es positivo.");
        } else {
            alert("El resultado es negativo.");
        }
    } catch (error) {
        alert('Error en la expresión: ' + error.message);
        pantalla.value = '';
    }
}