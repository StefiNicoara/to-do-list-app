export default class ToDoController {

    constructor(view, manager) {
        this.view = view;
        this.manager = manager;
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    repaint() {
        const list = this.manager.getAll();
        this.view.render(list, this.deleteItem, this.updateItem);
    }

    addItem() {
        const inputValue = this.view.getInput().value;
        this.view.clearInput();
        this.manager.add(inputValue);
        this.repaint();
    }

    updateItem(item) {
        this.manager.update(item);
        this.repaint();
    }

    deleteItem(id) {
        this.manager.remove(id);
        this.repaint();
    }

    bindEvents() {
        const btn = this.view.getBtn();
        btn.addEventListener("click", this.addItem);
    }
};
