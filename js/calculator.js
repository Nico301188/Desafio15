// Obtener referencia a la calculadora form
const calculadoraForm = document.getElementById('datos');

// Agregar un evento 'submit' al formulario
calculadoraForm.addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe
    event.preventDefault();
    
    // Obtener los valores de los campos num1 y num2
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Obtener la operación seleccionada
    const operacion = document.querySelector('input[name="operation"]:checked').value;
    
    // Realizar la operación correspondiente
    let resultado;
    switch (operacion) {
        case 'sum':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'mult':
            resultado = num1 * num2;
            break;
        case 'div':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Error: División por cero';
            }
            break;
        default:
            resultado = 'Error: Operación no válida';
    }
    
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById('resultado').textContent = resultado;
});