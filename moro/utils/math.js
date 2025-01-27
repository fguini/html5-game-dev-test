function rand(min, max) {
    return Math.floor(randf(min, max));
}

function randf(min, max) {
    if(max == null) {
        max = min || 1;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}

function randOneFrom(items) {
    return items[rand(items.length)];
}

function randOneIn(max = 2) {
    return rand(0, max) === 0;
}

function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export default {
    distance,
    rand,
    randf,
    randOneFrom,
    randOneIn,
};