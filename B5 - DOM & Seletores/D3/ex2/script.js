function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createTag(tag) {
  return document.createElement(tag)
}

createDaysOfTheWeek();

// 1
function dezDaysList() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const elementDays = document.querySelector('#days');

  for (day of dezDaysList) {
    let tag = createTag('li');
    tag.innerText = day;
    tag.className = 'day'

    if ([24,25,31].includes(day)) {
      tag.className += ' holiday';
    }

    if ([4,11,18,25].includes(day)) {
      tag.className += ' friday';
    }

    elementDays.appendChild(tag);
  }
  
}

dezDaysList();

// 2
function createButton(text, id) {
  let divContainer = document.querySelector('.buttons-container')
  let btn = createTag('button')

  btn.innerText = text;
  btn.id = id;
  divContainer.appendChild(btn);

}

createButton('Feriados', 'btn-holiday');

// 3
let btnHoliday = document.querySelector('#btn-holiday');
btnHoliday.addEventListener('click', function() {
  let color = 'white';
  let holidays = document.querySelectorAll('.holiday');
  let bgColor = holidays[0].style.backgroundColor;
  bgColor = bgColor === color ? '' : color;

  for (holiday of holidays) {
    holiday.style.backgroundColor = bgColor;
  }
});

// 4
createButton('Sexta-feira', 'btn-friday')

// 5
let btnFriday = document.querySelector('#btn-friday');
btnFriday.addEventListener('click', function() {
  let color = 'white';
  let fridays = document.querySelectorAll('.friday');
  let bgColor = fridays[0].style.backgroundColor;
  bgColor = bgColor === color ? '' : color;

  for (friday of fridays) {
    friday.style.backgroundColor = bgColor;
  }
});

// 6
let days = document.querySelector('#days');

days.addEventListener('mouseover', function(event) {
  if (event.target.id !== 'days'){
    event.target.style.fontSize = '30px';
  }
});

days.addEventListener('mouseout', function(event) {
  event.target.style.fontSize = '20px';
});

// 7
function newTask(value) {
  let myTasks = document.querySelector('.my-tasks');
  let task = createTag('span');
  if (value !== '') {
    task.innerText = value;
    myTasks.appendChild(task);
  }
  else {
    alert('Adicione um texto para adicionar uma tarefa!!!');
  }
}

function newTaskEvent(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    let input = document.querySelector('#task-input');
    newTask(input.value);
  }
}

let inputText = document.querySelector('#task-input');
let btnAdd = document.querySelector('#btn-add');

inputText.addEventListener('keypress', newTaskEvent);
btnAdd.addEventListener('click', newTaskEvent);

// 8
function newTaskColor(color) {
  let myTasks = document.querySelector('.my-tasks');
  let div = createTag('div')
  div.className = 'task';
  div.style.backgroundColor = color;
  myTasks.appendChild(div);
}

newTaskColor('green');

// 9
let taskColor = document.querySelector('.task');
taskColor.addEventListener('click', function() {
  if (taskColor.className.split(' ').includes('selected')) {
    taskColor.className = 'task';
  }
  else {
    taskColor.className += ' selected';
  }
});

// 10
days.addEventListener('click', function(event) {
  let day = event.target;
  let color = day.style.color;
  day.style.color = color !== 'green' ? 'green' : '';
})