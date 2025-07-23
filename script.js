
function mostrarEnDOM(texto) {
  const div = document.getElementById('resultado');
  const p = document.createElement('p');
  p.textContent = texto;
  div.appendChild(p);
}

let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Por favor, ingresa solo números válidos.");
} else {
  let numeros = [num1, num2, num3];

  if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales:", numeros);
    mostrarEnDOM("Los tres números son iguales: " + numeros.join(", "));
  } else {
    let descendente = [...numeros].sort((a, b) => b - a);
    let ascendente = [...numeros].sort((a, b) => a - b);

    console.log("Orden descendente:", descendente);
    console.log("Orden ascendente:", ascendente);

    mostrarEnDOM("Orden descendente: " + descendente.join(", "));
    mostrarEnDOM("Orden ascendente: " + ascendente.join(", "));
  }
}
