/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


const obj = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Noodles',
  },
]



function calculateTotalSpentByCategory(transactions) {
   let total =  0

   for (price of Object.values(transactions)) {
      if(price > 0){
        total += price;
      }
   }
  
  return [total];
}

calculateTotalSpentByCategory(obj)

module.exports = calculateTotalSpentByCategory;
