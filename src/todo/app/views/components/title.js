export default class Title {

    constructor() {
        this.officialTitle = null;
    }

    render(parent, text) {
        this.officialTitle = document.createElement("H1");
        const textEl = document.createTextNode(text);
        this.officialTitle.appendChild(textEl);
        parent.appendChild(this.officialTitle);
    }

    destroy() {
        this.officialTitle.remove();
    }

    getElement() {
        return this.officialTitle;
    }
}
