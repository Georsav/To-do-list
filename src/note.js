const mainboard = document.querySelector(".mainboard");
const myProjects = document.querySelector('.myProjects');
const myNotesHeader = document.createElement('h1');
const myNotesList = document.createElement('ul');
const simpleNoteDiv = document.createElement('div');
const simpleNoteForm = document.createElement('form');
const simpleNoteText = document.createElement('input');
const simpleNoteDescription = document.createElement('textarea');
const submitBtn = document.createElement('button');
const simpleNoteClearBtn = document.createElement('button');

/*class simpleNote {
    constructor(title, chkbxArr) {
        this.title = title;
        this.chkbxArr = chkbxArr;
    }
}*/

const mySimpleNotes ={};

export function createNote() {
    mainboard.appendChild(simpleNoteDiv);
    simpleNoteDiv.appendChild(simpleNoteForm);
    simpleNoteForm.appendChild(simpleNoteText);
    simpleNoteForm.appendChild(simpleNoteDescription);
    simpleNoteForm.appendChild(submitBtn);
    simpleNoteForm.appendChild(simpleNoteClearBtn);
    simpleNoteDiv.classList.add('simpleNoteDiv');
    simpleNoteForm.classList.add('simpleNoteForm');
    simpleNoteText.classList.add('simpleNoteText');
    simpleNoteText.name = "simpleNoteText";//name
    simpleNoteText.type = 'text';
    simpleNoteDescription.name = 'simpleNoteDescription';//name
    simpleNoteDescription.classList.add = 'simpleNoteDescription';
    simpleNoteDescription.rows = 22;
    simpleNoteText.placeholder = "Enter note title";
    simpleNoteDescription.placeholder = "Enter your notes";
    simpleNoteForm.appendChild(submitBtn);
    submitBtn.classList.add('submitBtn');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Save'; 
    simpleNoteClearBtn.classList.add('simpleNoteClearBtn');
    simpleNoteClearBtn.innerText = "Clear";
    simpleNoteClearBtn.type = 'reset';
    simpleNoteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nextNote = new FormData(simpleNoteForm);
        let newNote = {};
        if (nextNote.get('simpleNoteText') != '') {
        nextNote.forEach((value,key) =>{
            newNote[key] = value;
        });
        mySimpleNotes[simpleNoteText.value] = newNote;
        console.log(mySimpleNotes);
        simpleNoteDiv.innerHTML = '';
        simpleNoteDiv.remove();
        } else {
            alert('Enter a title for your note');
            } 
        });
    
    /*clearBtn.addEventListener('click', function(event) {
        event.preventDefault();
        delete mySimpleNotes[simpleNoteText.value];
    });*/
}

export function createSimpleNotesList() {
    myProjects.innerHTML = '';
    myProjects.appendChild(myNotesHeader);
    myNotesHeader.classList.add('myNotesHeader');
    myNotesHeader.innerHTML = 'My Notes';
    myProjects.appendChild(myNotesList);
    myNotesList.classList.add('myNotesList');
    myNotesList.innerHTML = '';
    for (let value of Object.keys(mySimpleNotes)) {
        const lstItem = document.createElement('li');
        myNotesList.appendChild(lstItem);
        lstItem.innerHTML = value;    
        lstItem.classList.add('lstItem');
    }
}

myNotesList.addEventListener('click', function(event) { //event delegation
    if (event.target && event.target.matches("li.lstItem")) {
        createNoteView(event);
    }
});

function createNoteView(event) {
    mainboard.innerHTML = '';
    const noteViewDiv = document.createElement('div');
    noteViewDiv.classList.add('noteViewDiv');
    mainboard.appendChild(noteViewDiv);
    const noteViewHeader = document.createElement('h1');
    const noteViewText = document.createElement('p');
    const noteViewDeleteBtn = document.createElement('button');
    noteViewHeader.classList.add("noteViewHeader");
    noteViewText.classList.add('noteViewText');
    noteViewDeleteBtn.classList.add('noteViewDeleteBtn');
    noteViewDeleteBtn.innerHTML = "Delete Note";
    noteViewDiv.appendChild(noteViewHeader);
    noteViewDiv.appendChild(noteViewText);
    noteViewDiv.appendChild(noteViewDeleteBtn);
    noteViewHeader.innerHTML = event.target.innerHTML;
    noteViewText.innerHTML = mySimpleNotes[event.target.innerHTML].simpleNoteDescription;
    noteViewDeleteBtn.addEventListener('click', function() {
        delete mySimpleNotes[event.target.innerHTML];
    });
}


    /*const projectParagr = document.createElement('p');
    projectParagr.classList.add('projectParagr');
    projectViewDiv.appendChild(projectParagr);
    projectParagr.innerText = allInstances[event.target.innerHTML].projectDescription;
}*/