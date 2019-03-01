export default class Button {
    constructor() {
        this.officialButton = null;
    }

    render(parent, text) {
        this.officialButton = document.createElement("BUTTON");
        const textEl = document.createTextNode(text);
        this.officialButton.appendChild(textEl);
        parent.appendChild(this.officialButton);
    }

    destroy() {
        this.officialButton.remove();
    }

    getElement() {
        return this.officialButton;
    }
}

