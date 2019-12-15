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
        for(let child of this.children)
            if(child.update) child.update(dt, t);
    }
}

export default Container;