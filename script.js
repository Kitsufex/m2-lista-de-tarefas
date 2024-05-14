const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    createTaskItem(arr[i]);
  }
}

renderElements(tasks);

function createTaskItem(obj){
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");

  ul.appendChild(li);
  li.classList.add("task__item");

  li.append(div, button);

  div.classList.add("task-info__container");
  div.append(span, p);

  p.textContent = obj.title;

  span.classList.add("task-type");
  span.textContent = "•";
  if (obj.type === "Urgente") {
    span.classList.add("span-urgent");
  }
  else if (obj.type === "Importante") {
    span.classList.add("span-important");
  } else if (obj.type === "Normal") {
    span.classList.add("span-normal");
  }

  button.classList.add("task__button--remove-task");
  button.addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();

    let indexObj = tasks.indexOf(obj);
    tasks.splice(indexObj, 1);

    ul.innerHTML = "";
    renderElements(tasks);
  })

}

let form = document.querySelector(".form__container");

form.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();
  const ul = document.querySelector("ul");
  const inputTitle = document.querySelector(".form__input--text");
  const inputType = document.querySelector(".form__input--priority");
  if (inputTitle.value === "" || inputType.value === "") {
    alert("Preencha o título ou selecione o tipo da tarefa");
  } else {
    const newTask = {
      title: inputTitle.value,
      type: inputType.value
    }

    tasks.push(newTask);
    ul.innerHTML = "";
    renderElements(tasks);
  }
  
})