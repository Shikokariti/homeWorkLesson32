import { FormInputs } from "./formInputs.js";

document.getElementById('createHtml').addEventListener('click',()=>{
    let formInputs = new FormInputs();
    formInputs.readAndRender();
});