script.js

Alpine.store('todo', {
    items: [],
    filter: 'all',
    
    get list() {
        if (this.filter === 'done') 
            return this.items.filter(i => i.done);
        return this.items;
    },

    add(text) { ... }
})

