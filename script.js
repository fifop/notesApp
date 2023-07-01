const notes = JSON.parse(localStorage.getItem('tasks')) || [];

const container = document.querySelector('.note-container');
const createButton = document.querySelector('#create-button');
const time = document.querySelector('#inputTime');
const date = document.querySelector('#inputDate');
const textarea = document.querySelector('#textarea');

createButton.addEventListener('click', createNote);

function createNote() {
  let taskVl = textarea.value;
  let timeVl = time.value;
  let dateVl = date.value;
  let rndIndex = Math.floor(Math.random()*3)+1
  let obj = {
    task: taskVl,
    date: timeVl,
    time: dateVl,
    id: Date.now(),
    image: `url('img/${rndIndex}.png')`
  };
  notes.push(obj);
  printNote(notes);


}

function printNote(arr) {
  container.innerHTML = '';
  // מיון ערכים
  const sortedNotes = _.sortBy(arr, 'time');
  saveNotesToLocalStorage();
  sortedNotes.forEach(item => {
    let newNote = new Note('.note-container', item);
    newNote.renderHtml();
    console.log(sortedNotes);
  });

  time.value = '';
  date.value = '';
  textarea.value = '';
}


function saveNotesToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(notes));
}

// Initial render
printNote(notes);

// פונקציה למחיקת כל פתק בנפרד
function removeNote(id){
  // const currentIndex = notes.findIndex(item => item.id=== id)
  notes.forEach((item,i)=> {
  if (item.id=== id) {
    notes.splice(i,1)
    printNote(notes);
    console.log(id);
  }
  });

  
}

// function reset(){
let btnReset = document.querySelector('#reset-button')
btnReset.addEventListener('click',function reset() {
  let userInput = prompt('האם אתה בטוח שברצונך למחוק את כל המשימות?');
  if (userInput === 'כן'){
    notes.splice(0,notes.length)
    printNote(notes);
  }

})


