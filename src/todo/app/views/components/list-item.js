import itemModule from './item'

export default class ListItem {

    constructor() {
        this.officialList = null;
    }

    render(parent, list, removeItem, updateItem) {
        this.officialList = document.createElement("ul");
        list.forEach((item) => {
            const itemM = new itemModule(item);
            itemM.render(this.officialList, removeItem, updateItem);
        });
        parent.appendChild(this.officialList);
    }

    destroy() {
        if (this.officialList) {
            this.officialList.remove();
        }
    }

    getElement() {
        return this.officialList;
    }

    size() {
        return this.officialList.length;
    }
}
