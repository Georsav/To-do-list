class Project {
    constructor(projectName, projectDescription, projectDueDate) {
        if (Project.exists(projectName)) {
            alert('A project with name: ${projectName} already exists');
            throw new Error('A project with name: ${projectName} already exists');
        }
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectDueDate = projectDueDate;
        this.todos = [];
    }

    static existingNames = new Set();

    static exists(projectName) {
        return Project.existingNames.has(projectName);
    }

    registerName() {
        Project.existingNames.add(this.projectName);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeToDo() {
        const newToDo = this.todos.filter((obj) => obj.removeItem != true);
        this.todos = newToDo;
    }
}

const mainboard = document.querySelector(".mainboard");
const myProjects = document.querySelector('.myProjects');
const newProjectDiv = document.createElement('div');
const newProjectForm = document.createElement('form');
const containDiv = document.createElement('div');
const projectName = document.createElement('input');
const projectDescription = document.createElement('textarea');
const dueDateDiv = document.createElement('div');
const dueDateLabel = document.createElement('label');
const dueDateInput = document.createElement('input');
const submitBtn = document.createElement('button');
const clearBtn = document.createElement('button');
const myProjectsHeader = document.createElement('h1');
const myProjectsList = document.createElement('ul');

const allInstances = {};

export function createProject() {
    mainboard.innerHTML = "";
    mainboard.appendChild(newProjectDiv);
    newProjectDiv.appendChild(newProjectForm);
    newProjectForm.appendChild(containDiv);
    containDiv.appendChild(projectName);
    containDiv.appendChild(projectDescription);
    dueDateDiv.classList.add('dueDateDiv');
    containDiv.appendChild(dueDateDiv);
    dueDateLabel.innerHTML = "Due Date:";
    dueDateDiv.appendChild(dueDateLabel);
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate'; //name
    dueDateDiv.appendChild(dueDateInput);
    containDiv.appendChild(submitBtn);
    containDiv.appendChild(clearBtn);
    newProjectDiv.classList.add('newProjectDiv');
    newProjectForm.classList.add('newProjectForm');
    containDiv.classList.add('containDiv');
    projectName.classList.add('projectName');
    projectName.setAttribute('name', 'projectName'); //name
    projectName.placeholder = "Enter project name";
    projectDescription.classList.add('projectDescription');
    projectDescription.setAttribute('name', 'projectDescription'); //name
    projectDescription.placeholder = "Enter project description";
    submitBtn.classList.add('submitBtn');
    clearBtn.classList.add('clearBtn');
    submitBtn.type = 'submit';
    submitBtn.innerHTML = "Save";
    clearBtn.innerHTML = 'Clear'
}

newProjectForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let nextProject = new FormData(newProjectForm);
    let newProject = new Project(nextProject.get('projectName'), 
        nextProject.get('projectDescription'), 
        nextProject.get('dueDate')
    );
    newProject.registerName();
    console.log(newProject.projectName);
    allInstances[newProject.projectName] = newProject;
    //console.log(allInstances);
    alert('Project Saved');
    mainboard.innerHTML = '';
});


clearBtn.addEventListener('click', function(event) {
    event.preventDefault();
    mainboard.innerHTML = '';
});

myProjectsList.addEventListener('click', function(event) { //event delegation
    if (event.target && event.target.matches("li.lstItem")) {
        createProjectView(event);
    }
});

export function createProjectsLst() {
    myProjects.innerHTML = '';
    myProjects.appendChild(myProjectsHeader);
    myProjectsHeader.classList.add('myProjectsHeader');
    myProjectsHeader.innerHTML = "My Projects";
    myProjects.appendChild(myProjectsList);
    myProjectsList.classList.add('myProjectList');
    myProjectsList.innerHTML = '';
    for (let value of Project.existingNames) {
        const lstItem = document.createElement('li');
        myProjectsList.appendChild(lstItem);
        lstItem.innerHTML = value;    
        lstItem.classList.add('lstItem');
    }
}

function createProjectView(event) {
    mainboard.innerHTML = '';
    const projectViewDiv = document.createElement('div');
    projectViewDiv.classList.add('projectViewDiv');
    mainboard.appendChild(projectViewDiv);
    const projectHeader = document.createElement('h1');
    projectHeader.classList.add("projectHeader");
    projectViewDiv.appendChild(projectHeader);
    projectHeader.innerHTML = event.target.innerHTML;
    const projectParagr = document.createElement('p');
    projectParagr.classList.add('projectParagr');
    projectViewDiv.appendChild(projectParagr);
    projectParagr.innerText = allInstances[event.target.innerHTML].projectDescription;
    const dueDateViewDiv = document.createElement('div');
    dueDateViewDiv.classList.add('dueDateViewDiv');
    projectViewDiv.appendChild(dueDateViewDiv);
    const dueDateViewLabel = document.createElement('label');
    dueDateViewLabel.innerHTML = "Due Date:";
    dueDateViewDiv.appendChild(dueDateViewLabel);
    const dueDateViewParagr = document.createElement('p');
    dueDateViewParagr.classList.add('dueDateViewParagr');
    dueDateViewDiv.appendChild(dueDateViewParagr);
    dueDateViewParagr.innerText = allInstances[event.target.innerHTML].dueDate;
    const addToDoBtn = document.createElement('button');
    addToDoBtn.classList.add('addToDoBtn');
    projectViewDiv.appendChild(addToDoBtn);
    addToDoBtn.innerHTML = 'Add new ToDo';
    addToDoBtn.addEventListener('click', function() {
        toDoFormDiv.innerHTML = '';
        createNewToDoForm(event.target.innerHTML);
    });
}
 
const toDoFormDiv = document.createElement('div');

function createNewToDoForm(rootPr) {
    const toDoForm = document.createElement('form');
    const simpleNoteTitleDiv = document.createElement('div');
    const formTitleLabel = document.createElement('label');
    const formTitleInput = document.createElement('input');
    const formDescriptionDiv = document.createElement('div');
    const formDescriptionTextArea = document.createElement('textarea');
    mainboard.appendChild(toDoFormDiv);
    toDoFormDiv.classList.add('toDoFormDiv');
    toDoFormDiv.appendChild(toDoForm);
    toDoForm.classList.add('toDoForm');
    toDoForm.appendChild(simpleNoteTitleDiv);
    simpleNoteTitleDiv.classList.add('simpleNoteTitleDiv');
    simpleNoteTitleDiv.appendChild(formTitleLabel);
    formTitleLabel.innerHTML = "Title:";
    simpleNoteTitleDiv.appendChild(formTitleInput);
    formTitleInput.type = 'text';
    formTitleInput.name = 'title'; //name
    toDoForm.appendChild(formDescriptionDiv);
    formDescriptionDiv.classList.add('formDescriptionDiv');
    formDescriptionDiv.appendChild(formDescriptionTextArea);
    formDescriptionTextArea.setAttribute('name', 'description'); //name
    formDescriptionTextArea.setAttribute('rows', '5');
    formDescriptionTextArea.placeholder = 'Enter description';
    const dueDateDiv = document.createElement('div');
    toDoForm.appendChild(dueDateDiv);
    dueDateDiv.classList.add('dueDateDiv');
    const dueDateLabel = document.createElement('label');
    dueDateDiv.appendChild(dueDateLabel);
    dueDateLabel.innerHTML = "Due Date:";
    const dueDateInput = document.createElement('input');
    dueDateDiv.appendChild(dueDateInput);
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate'; //name
    const notesDiv = document.createElement('div');
    toDoForm.appendChild(notesDiv);
    notesDiv.classList.add('notesDiv');
    const notesTextArea = document.createElement('textarea');
    notesDiv.appendChild(notesTextArea);
    notesTextArea.setAttribute('name', 'notes'); //name
    notesTextArea.setAttribute('rows', '3');
    notesTextArea.placeholder = 'Enter notes';
    //priority Div:
    const priorityDiv = document.createElement('div');
    toDoForm.appendChild(priorityDiv);
    priorityDiv.classList.add('priorityDiv');
    const priorityLabel = document.createElement('label');
    priorityDiv.appendChild(priorityLabel);
    priorityLabel.innerHTML = "Priority:";
    const prioritySelect = document.createElement('select');
    priorityDiv.appendChild(prioritySelect);
    prioritySelect.setAttribute('name', 'priority'); //name
    const option1 = document.createElement('option');
    prioritySelect.appendChild(option1);
    option1.setAttribute('value', 'low');
    option1.innerHTML = 'Low';
    const option2 = document.createElement('option');
    prioritySelect.appendChild(option2);
    option2.setAttribute('value', 'medium');
    option2.innerHTML = 'Medium';
    const option3 = document.createElement('option');
    prioritySelect.appendChild(option3);
    option3.setAttribute('value', 'high');
    option3.innerHTML = 'High';
    const toDosubmitBtn = document.createElement('button');
    toDoForm.appendChild(toDosubmitBtn);
    toDosubmitBtn.classList.add('toDosubmitBtn');
    toDosubmitBtn.type = 'submit';
    toDosubmitBtn.innerHTML = "Save";
    const toDoclearBtnDiv = document.createElement('div');
    toDoForm.appendChild(toDoclearBtnDiv);
    toDoclearBtnDiv.classList.add('toDoclearBtnDiv');
    const toDoclearBtn = document.createElement('button');
    toDoclearBtnDiv.appendChild(toDoclearBtn);
    toDoclearBtn.classList.add('toDoclearBtn');
    toDoclearBtn.type = 'button';
    toDoclearBtn.innerHTML = 'Clear';
    toDoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(rootPr);
        let nextToDo = new FormData(toDoForm);
        let newToDo = {
            title:nextToDo.get('title'), 
            description: nextToDo.get('description'), 
            dueDate: nextToDo.get('dueDate'), 
            notes: nextToDo.get('notes'),
            priority: nextToDo.get('priority')
        }
        allInstances[rootPr].todos.push(newToDo);
        console.log(allInstances);
        toDoFormDiv.remove();
    });
}




