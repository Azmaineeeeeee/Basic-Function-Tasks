function leapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(`The Year ${year} is a Leap Year`);
    }
    else{
        console.log(`The Year ${year} is not a Leap Year`);
    }
    return year;
}
const checkedYear = leapYear(2024);
console.log(checkedYear);
