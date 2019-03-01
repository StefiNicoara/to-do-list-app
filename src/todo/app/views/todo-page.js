import Title from './components/title'
import Button from './components/button'
import Input from './components/input'
import ListItem from './components/list-item'

export default class ToDoPage {

    constructor() {
        this.container = null;
        this.myBtn = null;
        this.myInput = null;
        this.myTitle = null;
        this.myList = null;
        this.container = document.createElement("div");
    }

    initRender(parent) {
        this.container.className = "myDiv";
        parent.appendChild(this.container);

        this.myTitle = new Title();
        this.myTitle.render(this.container, "To do list");

        this.myInput = new Input();
        this.myInput.render(this.container);

        this.myBtn = new Button();
        this.myBtn.render(this.container, "Add");

        this.myList = new ListItem();
    }

    render(list, removeItem, updateItem) {
        this.myList.destroy();
        this.myList.render(this.container, list, removeItem, updateItem);
    }

    getInput() {
        return this.myInput.getElement();
    }

    getBtn() {
        return this.myBtn.getElement();
    }

    clearInput() {
        this.myInput.clear();
    }

    destroy() {
        this.myBtn.destroy();
        this.myInput.destroy();
        this.myTitle.destroy();
        this.myList.destroy();
        this.container.remove();
    }
}


