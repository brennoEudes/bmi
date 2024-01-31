// 1º Mapear as variáveis:
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// OBJECT LITERAL: objeto responsável por orquestrar as funcionalidades.
// É uma estrutura de dados c/ responsabilidades divididas.
const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal button.close"),

  // Shorthand de fcn disponível a partir do JS ES6:
  // O formato abaixo é a msm coisa que open: function () {...alguma coisa}
  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

// 3 maneiras de criar e atribuir função a um evento:
// OBS: O método ON acessa diversas funcionalidades na DOM:

// a) Atribuir uma fcn diretamente
form.onsubmit = function (event) {
  // Evita o comportamente padrão do form (enviar form e carregar pág):
  event.preventDefault();

  // Pega os valores dos inputs:
  const weight = inputWeight.value;
  const height = inputHeight.value;

  // console.log(weight, height);

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

Modal.btnClose.onclick = () => Modal.close(); // Arrow fcn c/ 1 linha, podemos tirar as chaves!

// fcn faz o cálculo do IMC:
function BMI(weight, height) {
  return (weight / height ** 2).toFixed(2);
}
