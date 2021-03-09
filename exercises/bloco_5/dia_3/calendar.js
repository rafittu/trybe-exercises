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

createDaysOfTheWeek();

// Escreva seu código abaixo.


// Exercício 1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDays.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDays.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDays.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getDays.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth()


// Exercício 2
function createHolidayButton(buttonName) {
  let btnContainer = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');
  let newBtnId = 'btn-holiday';

  newBtn.innerHTML = buttonName;
  newBtn.id = newBtnId;
  btnContainer.appendChild(newBtn);
}
createHolidayButton('Feriados');


// Exercício 3
function holidayEvent() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let originColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === originColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = originColor;
      }
    }
  })
}
holidayEvent();


// Exercício 4
function createFridayButton(buttonName) {
  let btnContainer = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');
  let newBtnId = 'btn-friday';

  newBtn.innerHTML = buttonName;
  newBtn.id = newBtnId;
  btnContainer.appendChild(newBtn);
}
createFridayButton('Sexta-Feira');


// Exercício 5 (!!!)
function fridayEvent (fridayArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.getElementsByClassName('friday');
  let newText = 'Inshala!';

  getFridayButton.addEventListener('click', function(){
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerHTML !== newText) {
        getFridays[index].innerHTML = newText;
      } else {
        getFridays[index].innerHTML = fridayArray[index];
      }
    }
  })
}
let fridays = [4, 11, 18, 25];
fridayEvent(fridays);


// Exercício 6 (!!!)
function daysMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}
daysMouseOver();

function daysMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}
daysMouseOut();


//Exercício 7
function newTask(task) {
  let getTaskContainer = document.querySelector('.my-tasks');
  let taskEvent = document.createElement('span');
  taskEvent.innerHTML = task;
  getTaskContainer.appendChild(taskEvent);
}
newTask('To do');


// Exercício 8
function spanColor(color) {
  let getTaskContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  getTaskContainer.appendChild(newTask);
}
spanColor('blue');