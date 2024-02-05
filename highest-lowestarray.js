function highestNumber(numbers){         // Find out the biggest number from an array.
  let maxNumber = numbers[0]
  for(let number of numbers){
     if(maxNumber < number){
        maxNumber = number
     }
  }
  return maxNumber;
}
const highest = highestNumber([2000,4000,3000,5000,6000,7000,1000,9000]);
console.log(highest);


function lowestNumber(numbers){         // Find out the lowest number from an array.
  let minNumber = numbers[0]
  for(let number of numbers){
     if(minNumber > number){
        minNumber = number
     }
  }
  return minNumber;
}
const lowest = lowestNumber([2000,4000,3000,5000,6000,7000,1000,9000]);
console.log(lowest);

// find out the costliest phone
const phones = [
    {name: 'Samgsung', price: 20000, camera: '12mp'},
    {name: 'Xaomi', price: 18000, camera: '12mp'},
    {name: 'OPPO', price: 30000, camera: '12mp'},
    {name: 'Iphone', price: 100000, camera: '12mp'},
    {name: 'HTC', price: 27000, camera: '12mp'},
]

function costliestPhone(phones){
    let costlier = phones[0];
    for(let phone of phones){
       if(costlier.price < phone.price){
        costlier = phone;
       }
    }
    return costlier;
}

const costliest = costliestPhone(phones);
console.log(costliest);


// total price of all the products
const products = [
    {name: 'shampoo', price: 300},
    {name: 'pajama', price: 100},
    {name: 'kurta', price: 500},
    {name: 'shirt', price: 400},
    {name: 'pant', price: 1200},
]

function totalPrice(products){
   let total = 0;
   for(let item of products){
    total = total + item.price;
   }
   return total;
}
const totalPrices = totalPrice(products);
console.log("Total Price of all the products:",totalPrices);


// total price in a shopping cart with quantity
const product = [
    {name: 'shampoo', price: 300,quantity : 3},
    {name: 'pajama', price: 100 ,quantity : 2},
    {name: 'kurta', price: 500  ,quantity : 1},
    {name: 'shirt', price: 400  ,quantity : 1},
    {name: 'pant', price: 1200  ,quantity : 2},
]

function totalQuantity(product){
    let totals = 0;
    for(let item of product){
     totals = totals + ((item.price)*(item.quantity));
    }
    return totals;
 }
 const totalPriced = totalQuantity(product);
 console.log("Total Price of all the products with quantity:",totalPriced);

 