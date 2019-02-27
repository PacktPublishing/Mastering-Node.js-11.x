const faker = require("faker");

function randomProduct() {
    return {
        name: faker.commerce.product(),
        prices: [
            parseFloat(faker.commerce.price(50, 100)),
            parseFloat(faker.commerce.price(50, 100)),
            parseFloat(faker.commerce.price(50, 100))
        ],
        inStock: faker.random.boolean()
    };
}

function generateRandomProducts(amount) {
    let products = [];
    for(let i=0; i < amount; i++) {
        products.push(randomProduct());
    }
    return products;
}

function getStockedProducts(products) {
    return products.filter(product => product.inStock);
}

function findAverageProductPrice(products) {
    let prices = products.map(p => p.prices)
        .join(",")
        .split(",")
        .map(p => parseFloat(p));

    return prices.reduce((prev, current) => {
        return prev + current;
    }, 0) / prices.length;
}

let products = generateRandomProducts(10);
console.log(findAverageProductPrice(getStockedProducts(products)));