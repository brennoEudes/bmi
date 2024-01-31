// 1º Mapear as variáveis:
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal button.close");


// 3 maneiras de criar e atribuir função a um evento:
// OBS: O método ON acessa diversas funcionalidades na DOM:

// 1º Atribuir uma fcn diretamente
form.onsubmit = function (event) {
  // Evita o comportamente padrão do form (enviar form e carregar pág):
  event.preventDefault();

  // Pega os valores dos inputs:
  const weight = inputWeight.value;
  const height = inputHeight.value;

  // console.log(weight, height);

  const result = BMI(weight, height);
  const message = `Your BMI is ${result}.`
  //console.log(result);

  modalWrapper.classList.add("open");
  modalMessage.innerHTML = message;
};

// 2º Arrow function:
// form.onsubmit = () => {}

// 3º Criando uma fcn e passar o nome como referência:
//form.onsubmit = handleSubmit
//function handleSubmit() {}

// fcn faz o cálculo do IMC:
function BMI(weight, height) {
  return (weight / height ** 2).toFixed(2);
}
