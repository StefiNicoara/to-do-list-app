import Checkbox from './checkbox'
import Text from './text'
import Button from './button'

export default class Item {

    constructor(item) {
        this.officialItem = null;
        this.item = item;
    }

    render(parent, removeItem, updateItem) {
        this.officialItem = document.createElement("li");
        this.officialItem.classList.add("item");
        const check = new Checkbox();
        const text = new Text();
        const btn = new Button();
        check.render(this.officialItem, this.item.checked);
        text.render(this.officialItem, this.item.textDesc, this.item.checked);
        btn.render(this.officialItem, "delete");
        btn.getElement().addEventListener("click", () => {
            removeItem(this.item.id);
        });
        check.getElement().addEventListener("change", () => {
            this.item.checked = this.item.checked !== true;
            console.log(this.item);
            updateItem(this.item);
        });
        parent.appendChild(this.officialItem);
    }
}

