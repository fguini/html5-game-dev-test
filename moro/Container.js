class Container {
    constructor() {
        this.pos = {x: 0, y: 0};
        this.children = [];
    }

    add(child) {
        this.children = [...this.children, child];
    }

    remove(child) {
        this.children = this.children.filter(c => c !== child);
        return child;
    }

    update(dt, t) {
        this.children = this.children.filter(function(child) {
            if(child.update)
                child.update(dt, t);
            return !child.dead;
        });
    }
}

export default Container;