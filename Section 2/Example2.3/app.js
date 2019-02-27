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
    return products.filter(p => p.inStock);
}

function findAverageProductPrice(products) {
    let totalPriceSum = 0;
    let pricesCount = 0;
    products.forEach(product => {
        product.prices.forEach(price => {
            totalPriceSum += price;
            pricesCount++;
        });
    });
    return totalPriceSum / pricesCount;
}

let products = generateRandomProducts(10);
console.log(findAverageProductPrice(  getStockedProducts(products)  ));