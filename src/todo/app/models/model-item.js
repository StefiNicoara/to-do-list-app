export default class ItemModel {

    constructor(id, textDesc, checked) {

        this.id = id || "todo-" + Date.now();
        this.checked = checked;
        this.textDesc = textDesc;
    }
}