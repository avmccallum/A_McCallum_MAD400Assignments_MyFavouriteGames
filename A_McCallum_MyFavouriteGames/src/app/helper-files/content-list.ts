import { Content } from "./content-interface";

export class ContentList {
    private _items: Content[];
    
    constructor() {
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
        if(index < 0 || index > this.itemCount()) {
            return "<h2>Array index out of bounds</h2>";
        } else {
            let item = this._items[index];
            let image = item.imgURL != null ? `<img src="${item.imgURL}">` : `<p>No Image</p>`;
            let type = item.type != null ? item.type : "N/A";
            let tags = item.tags ? item.tags.join(", ") : "N/A";
            
            return `<p>Title: ${item.title}</p>
                    <p>Description: ${item.description}</p>
                    <p>Creator: ${item.creator}</p>
                    ${image} 
                    <p>Type: ${type}</p>
                    <p>Tags: ${tags}</p>`;
            
        }
    }
}