let c = [1, 2];
let d = [1, 2];

//d.push(9);

//d = [3,4,5];

console.log('d', d);
console.log('c', c);

console.log('c===d', c === d);
console.log('c==d', c == d);


function calculatePrice(price, taxes, description) {
    taxes = taxes ?? 0.05
    description = description ?? 'a blank item'
    const total = price * (1 + taxes)
    console.log(`%c${description} With Tax: $${total}`, "color: red")
}

calculatePrice(100, 0.07, "My Item");

calculatePrice(100, 0, "My Other Item");

calculatePrice(100, undefined, "");