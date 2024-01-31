// OBJECT LITERAL: objeto responsável por orquestrar as funcionalidades.
// É uma estrutura de dados c/ responsabilidades divididas.
export const Modal = {
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

Modal.btnClose.onclick = () => Modal.close(); // Arrow fcn c/ 1 linha, podemos tirar as chaves!

window.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
  if (event.key === "Escape") {
    //console.log("Cliquei no esc!");
    Modal.close();
  }
}
