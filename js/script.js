import { Modal } from "./modal.js";

// 1º Mapear as variáveis:
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// 3 maneiras de criar e atribuir função a um evento:
// OBS: O método ON acessa diversas funcionalidades na DOM:

// a) Atribuir uma fcn diretamente
form.onsubmit = function (event) {
  // Evita o comportamente padrão do form (enviar form e carregar pág):
  event.preventDefault();

  // Pega os valores dos inputs:
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notANumber(weight) || notANumber(height); // se weight e height não forem nº ou se forem vazio, serão verdadeiro. 

  if (showAlertError) {
    console.log("Mostrar alerta de erro!")
    return;
  }

  const result = BMI(weight, height);
  const message = `Your BMI is ${result}.`;
  //console.log(result);

  Modal.message.innerHTML = message;
  Modal.open();
};

// b) Arrow function:
// form.onsubmit = () => {}

// c) Criando uma fcn e passar o nome como referência:
//form.onsubmit = handleSubmit
//function handleSubmit() {}


// Checagem booleana se o input NÃO é nº ou se é vazio:
function notANumber (value) {
  return isNaN(value) || value === "";
}

// fcn faz o cálculo do IMC:
function BMI(weight, height) {
  return (weight / height ** 2).toFixed(2);
}
