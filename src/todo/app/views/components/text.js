export default class Text {

    constructor() {
        this.officialText = null;
    }

    render(parent, text, checkedState) {
        this.officialText = document.createElement("span");
        const textEl = document.createTextNode(text);
        this.officialText.appendChild(textEl);
        parent.appendChild(this.officialText);
        this.officialText.className = "animation";
        if (checkedState) {
            setTimeout(() => {
                this.officialText.className += " oncheck";
            }, 10)
        }
    }
}
