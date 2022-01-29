class ContentList {
    private _items: Content[];
    
    constructor(item: Content) {
        this._items = [];
    }

    get items(): Content[] {
        return this._items;
    }

    addItem(item: Content) {
        this._items.push(item);
    }

    itemCount(): number {
        return this._items.length;
    }

    getItemDetail(index: number): string {
        if(index < this._items.length) {
            let item = this._items[index];
            return "";
        } else {
            return "";
        }
    }
}