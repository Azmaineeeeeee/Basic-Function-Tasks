// Task -1:
// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(heights2){
    let lowest = heights2[0];
    for(let numbers of heights2){
        if(lowest > numbers){
            lowest = numbers;
        }
    }
    return lowest;
}
const lowNumber = lowestNumber([167, 190, 120, 165, 137]);
console.log(lowNumber);

// Task -2:
// Find the friend with the smallest name.
const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(heights){
    let smallest = heights[0];
    for(let name of heights){
        if(smallest.length > name.length){
            smallest = name;
        }
    }
    return smallest;
}
let small = smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(small);


// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(quantityLaptop,quantityTablets,quantityMobile){
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    if(typeof quantityLaptop !=="number" || typeof quantityTablets !=="number" || typeof quantityMobile!=="number" ){
        return "Please enter a valid integer number";
    }
    else if(quantityLaptop < 0 || quantityTablets < 0 || quantityMobile < 0){
        return "Quantity should at least be a positive number including zero"
    }
    else{
        let totalMoneyRequired = ((quantityLaptop * laptop) + (quantityMobile * mobile) + (quantityTablets * tablet));
        return totalMoneyRequired;
    }


}
let totalBill = calculateElectronicsBudget(1,2,0);
console.log(totalBill);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice(phones){
        let totalPrice = 0;
        let totalPhones = 0;
        for(let prices of phones){
            totalPrice += prices.price;
            totalPhones++;
        }
        let averagePrice = (totalPrice / totalPhones);
        return {totalPrice,totalPhones,averagePrice};

    }
    let average = findAveragePhonePrice(phones);
    console.log(average.averagePrice.toFixed(3));
    

//  Task -5: 
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
           { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
           { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
           { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
           { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
       ];

function totalSalary(employees){
    let total = 0;
    for(let person of employees){
        let salary = ((person.increment * person.experience) + person.starting);
        total = total + salary;
    }
    return total;
}
const monthlySalary = totalSalary(employees);
console.log(monthlySalary);