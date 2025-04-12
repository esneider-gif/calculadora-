function calcularIMC() {
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const edad = parseInt(document.getElementById('edad').value);
    const telefono = document.getElementById('telefono').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!nombre || !cedula || !edad || !telefono || !peso || !altura) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let mensaje = `Hola ${nombre}, con cédula ${cedula} y teléfono ${telefono}. Tu IMC es ${imc}. `;

    if (edad < 18) {
        mensaje += `Eres menor de edad con ${edad} años.`;
    } else {
        mensaje += `Eres mayor de edad con ${edad} años.`;
    }
    mensaje += evaluarPeso(imc);
    document.getElementById('resultado').innerText = mensaje;
}

function evaluarPeso(imc) {
    if (imc < 18.5) {
        return "Tienes bajo peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Tu peso es normal.";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Tienes sobrepeso.";
    } else {
        return "Tienes obesidad.";
    }
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('cedula').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerText = '';
}

    


