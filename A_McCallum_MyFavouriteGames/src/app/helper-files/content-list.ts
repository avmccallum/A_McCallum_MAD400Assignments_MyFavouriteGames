import { Content } from "./content-interface";

export class ContentList {
    private _items: Content[];
    
    constructor() {
        this._items = [];
    }

    //returns an array of all items in the list
    get items(): Content[] {
        return this._items;
    }

    //adds a Content item to the end of the list
    addItem(item: Content) {
        this._items.push(item);
    }

    //returns the number of items in the list
    itemCount(): number {
        return this._items.length;
    }

    //returns a string of the item details at an index number OR an error message if index is out of bounds
    getItemDetail(index: number): string {
        if(index < 0 || index > this.itemCount()) {
            return "<h2>Array index out of bounds</h2>";
        } else {
            let item = this._items[index];
            //check if optional values are empty
            let image = item.imgURL != null ? `<img src="${item.imgURL}">` : `<p>No Image</p>`;
            let type = item.type != null ? item.type : "N/A";
            let tags = item.tags ? item.tags.join(", ") : "N/A";
            
            return `<h2>Title: ${item.title}</h2>
                    <p>Description: ${item.description}</p>
                    <p>Creator: ${item.creator}</p>
                    ${image} 
                    <p>Type: ${type}</p>
                    <p>Tags: ${tags}</p>`;
            
        }
    }
}