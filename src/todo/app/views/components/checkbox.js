export default class Checkbox {

    constructor() {
        this.officialCheckbox = null;
    }

    render(parent, state) {
        this.officialCheckbox = document.createElement("INPUT");
        this.officialCheckbox.setAttribute("type", "checkbox");
        this.officialCheckbox.checked = state;
        parent.appendChild(this.officialCheckbox);
    }

    destroy() {
        this.officialCheckbox.remove();
    }

    getElement() {
        return this.officialCheckbox;
    }

}
