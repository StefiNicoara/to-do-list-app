import ItemModel from './model-item'
import Storage from '../storage'

export default class {

    constructor() {
        this.storage = new Storage();
    }

    add(inputValue) {
        const modelItem = new ItemModel(null, inputValue, false);
        this.storage.add(modelItem);
    }

    remove(id) {
        this.storage.removeById(id);
    }

    update(item) {
        this.storage.update(item);
    }

    getAll() {
        let list = this.storage.getElems();

        return list.map(function (item) {
            return new ItemModel(item.id, item.textDesc, item.checked);
        })
    }
}

