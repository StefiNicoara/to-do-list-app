export default class Storage {

    constructor() {
        this.db = "todolist";
    }

    // updateDB([]);

    updateDB(data) {
        window.localStorage.setItem(this.db, JSON.stringify(data));
    }

    getDB() {
        const dataString = window.localStorage.getItem(this.db);
        return JSON.parse(dataString);
    }

    add(item) {
        const elements = this.getDB();
        elements.push(item);
        this.updateDB(elements);
    }

    removeById(id) {
        const elements = this.getDB();
        const newElements = elements.filter(item => item.id !== id);
        this.updateDB(newElements);
    }

    update(item) {

        console.log(item);
        const elements = this.getDB();
        const newElements = elements.map(el => el.id === item.id ? item : el );
        console.log(newElements);
        this.updateDB(newElements);
    }

    getElems() {
        return this.getDB();
    }
}
