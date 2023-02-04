import { CreateElement } from "./createElement.js";

export class FormInputs {
    tagName;
    propertyName;
    propertyContent;
    content;
    constructor(){
        this.tagName = document.getElementById('tagName').value;
        this.propertyName = document.getElementById('propertyName').value;
        this.propertyContent = document.getElementById('propertyContent').value;
        this.content = document.getElementById('content').value;
    }
    readAndRender() {
        let createElement = new CreateElement(this);
        createElement.render();
    }
}