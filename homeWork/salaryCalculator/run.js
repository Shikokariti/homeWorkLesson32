import { Calculator } from "./calculator.js";
let formActive = false;
let currentCalculator = '';
document.getElementById('sendForm').addEventListener('click',()=>{
   currentCalculator = new Calculator();
   formActive = true;
   displayForm();
});
document.getElementById('newFormBtn').addEventListener('click',()=>{
    formActive = false;
    currentCalculator.resetUser();
    displayForm();
});
function displayForm() {
    if (formActive) {
        document.getElementById('newUserForm').style.display = 'none';
        document.getElementById('activeUserForm').style.display = 'block';
        document.getElementById('newFormBtn').style.display = 'block';
    } else {
        document.getElementById('newUserForm').style.display = 'block';
        document.getElementById('activeUserForm').style.display = 'none';
        document.getElementById('newFormBtn').style.display = 'none';
    }
}
