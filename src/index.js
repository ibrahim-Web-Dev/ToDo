import './style.css';
import {addToDo} from "./sub.js"
const todoButton=document.querySelector(".addTodo")
todoButton.addEventListener("click",addToDo)