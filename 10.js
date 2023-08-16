let apple = {
    color: 'red',
    height: 15,
    weight: 50,
};

let orange = {
    color: 'orange',
    height: 10,
    weight: 40,
};

let grape = {
    color: 'purple',
    height: 20,
    weight: 30,
};

let fruits = [apple, orange, grape];

let total = 0;

fruits.forEach(e => {
    total += e.weight;
});

console.log(total);