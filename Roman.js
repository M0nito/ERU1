// no toque

// Módulo para calcular el Índice de Masa Corporal
function calcularIMC(pesoKg, alturaM) {
    if (pesoKg <= 0 || alturaM <= 0) {
        console.error("❌ Datos inválidos: peso y altura deben ser mayores a cero.");
        return null;
    }

    const imc = pesoKg / (alturaM * alturaM);
    return imc.toFixed(2); // Redondea a 2 decimales
}

// Módulo para interpretar el resultado del IMC
function interpretarIMC(imc) {
    if (imc === null) return "No se puede interpretar un IMC inválido.";

    if (imc < 18.5) return "🔵 Bajo peso";
    if (imc < 24.9) return "🟢 Peso normal";
    if (imc < 29.9) return "🟠 Sobrepeso";
    return "🔴 Obesidad";
}

// Ejemplo de uso
const peso = 70;      // en kilogramos
const altura = 1.75;  // en metros

const imcCalculado = calcularIMC(peso, altura);
const resultado = interpretarIMC(imcCalculado);

console.log(`Tu IMC es: ${imcCalculado}`);
console.log(`Interpretación: ${resultado}`);