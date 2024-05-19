import "./style.css";
import "./note.css";
import "./project.css";
import "./todo.css";

import {createNote, createSimpleNotesList} from "./note.js";
import {createProject, createProjectsLst, deleteProject} from "./project.js";


const simpleNoteButton = document.getElementById('simpleNoteBtn');
const newProjectBtn = document.getElementById('newProjectBtn');
const deleteProjectBtn = document.getElementById('deleteProjectBtn');
const viewProjectsBtn = document.getElementById('viewProjectsBtn')

simpleNoteButton.addEventListener('click', function() {
    createNote();
});

newProjectBtn.addEventListener('click', function() {
    createProject();
});

viewProjectsBtn.addEventListener('click', function() {
    createProjectsLst();
});

viewNotesBtn.addEventListener('click', function() {
    createSimpleNotesList();
});

deleteProjectBtn.addEventListener('click', function() {
    deleteProject();
});
