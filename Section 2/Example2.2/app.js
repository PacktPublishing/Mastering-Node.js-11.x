const faker = require("faker");

function randomProduct() {
    return {
        name: faker.commerce.product(),
        prices: [
            parseFloat(faker.commerce.price(50, 100)),
            parseFloat(faker.commerce.price(50, 100)),
            parseFloat(faker.commerce.price(50, 100))
        ]
    }
}

function generateRandomProducts(amount) {
    let products = [];
    for(let i=0; i < amount; i++) {
        products.push(randomProduct());
    }
    return products;
}

// function findAverageProductPrice(products) {
//     for(let product of products) {
//         let pricesSum = 0;
//         for(let price of product.prices) {
//             pricesSum += price;
//         }
//         product.avgPrice = pricesSum / product.prices.length;  //Side Effect!
//     }
//     let productsPricesSum = 0;
//     for(let product of products) {
//         productsPricesSum += product.avgPrice;  //taking advantage of side effect
//     }
//     let totalAvgPrive = productsPricesSum / products.length;
//     console.log(`Average products price: ${totalAvgPrive}`);
// }

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
console.log(`Avg price: ${findAverageProductPrice(products)}`);