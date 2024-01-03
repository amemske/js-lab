// Question
// Consider a scenario where you have been given an array of integers representing the daily stock prices of a company for a given period.
// You are also provided with an object (associative array) of stock prices for the same period. You are required to implement a program that performs the following tasks:


// Calculate the average stock price:
// Write a function, calculateAveragePrice, that takes the array of stock prices as input and returns the average price of the stocks.
function calculateAveragePrice(stockPrices) {
    if (stockPrices.length === 0) {
        return 0; // Return 0 if the array is empty
    }
    const total = stockPrices.reduce((sum, price) => sum + price, 0);
    const average = total / stockPrices.length;
    return average;
}

// Find the maximum stock price:
// Write a function, findMaximumPrice, that takes the array of stock prices as input and returns the maximum price among all the stocks. 
function findMaximumPrice(stockPrices) {
    if (stockPrices.length === 0) {
        return null; // Return null if the array is empty
    }
    return Math.max(...stockPrices);
}

// Determine the occurrence count of a specific price:
// Write a function, countOccurrences, that takes the array of stock prices and a target price as input and returns the number of times the target price occurs in the array. 
function countOccurrences(stockPrices, targetPrice) {
    return stockPrices.filter(price => price === targetPrice).length;
}

// GET the cumulative sum of stock prices:
// Write a function, computeCumulativeSum, that takes the associative array of stock prices as input and returns a new associative array containing the cumulative sum of prices at each position.
function computeCumulativeSum(stockPrices) {
    const cumulativeSum = {};
    let runningSum = 0;
    for (const key in stockPrices) {
        if (stockPrices.hasOwnProperty(key)) {
            runningSum += stockPrices[key];
            cumulativeSum[key] = runningSum;
        }
    }
    return cumulativeSum;
}

// Example usage:
const stockPricesArray = [50, 55, 60, 45, 70, 80, 65];
const stockPricesObject = { day1: 50, day2: 55, day3: 60, day4: 45, day5: 70, day6: 80, day7: 65 };

const averagePrice = calculateAveragePrice(stockPricesArray);
const maxPrice = findMaximumPrice(stockPricesArray);
const targetPrice = 60;
const occurrences = countOccurrences(stockPricesArray, targetPrice);
const cumulativeSum = computeCumulativeSum(stockPricesObject);

console.log("Average Price:", averagePrice);
console.log("Maximum Price:", maxPrice);
console.log(`Occurrences of ${targetPrice}: ${occurrences}`);
console.log("Cumulative Sum of Stock Prices:");
console.log(cumulativeSum);

//OUTPUT
// 'Average Price:' 60.714285714285715
// 'Maximum Price:' 80
// 'Occurrences of 60: 1'
// 'Cumulative Sum of Stock Prices:'
// {
//   day1: 50,
//   day2: 105,
//   day3: 165,
//   day4: 210,
//   day5: 280,
//   day6: 360,
//   day7: 425
// }
