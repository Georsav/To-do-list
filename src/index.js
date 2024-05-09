import "./style.css";
import "./note.css";
import "./project.css";
import "./todo.css";

import {createNote, createSimpleNotesList} from "./note.js";
import { createProject, createProjectsLst } from "./project.js";


const simpleNoteButton = document.getElementById('simpleNoteBtn');
const newProjectBtn = document.getElementById('newProjectBtn');
const myProjectsList = document.querySelector(".myProjectsList");


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

