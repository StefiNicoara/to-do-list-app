export default class Input {

    constructor() {
        this.officialInput = null;
    }

    render(parent) {
        this.officialInput = document.createElement("input");
        this.officialInput.placeholder = "enter item";
        parent.appendChild(this.officialInput);
    }

    destroy() {
        this.officialInput.remove();
    }

    clear() {
        this.officialInput.value = "";
    }

    getElement() {
        return this.officialInput;
    }
}
