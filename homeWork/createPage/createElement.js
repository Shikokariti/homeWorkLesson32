export class CreateElement {
    formObject;
    constructor(formObjectInput) {
        this.formObject = formObjectInput;
    }
    render() {
        let newElement = document.createElement(this.formObject.tagName);
        newElement.setAttribute(this.formObject.propertyName,this.formObject.propertyContent);
        let textualContent = document.createTextNode(this.formObject.content);
        newElement.appendChild(textualContent);
        document.body.appendChild(newElement);
    }
}