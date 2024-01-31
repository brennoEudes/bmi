// Checagem booleana se o input NÃO é nº ou se é vazio:
export function notANumber(value) {
  return isNaN(value) || value === "";
}

// fcn faz o cálculo do IMC:
export function calculateBMI(weight, height) {
  return (weight / height ** 2).toFixed(2);
}
