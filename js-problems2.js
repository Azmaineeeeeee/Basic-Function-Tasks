// using if-else 
num1 = 95;
num2 = 84;
num3 = 97;

if((num1 > num2) && (num1 > num3)){
    console.log("Num1 is biggest",num1);
}

else if((num2 > num1) && (num2 > num3)){
    console.log("Num2 is biggest",num2);
}
else{
    console.log("Num3 is biggest",num3);
}

// using function
function biggest(num1,num2,num3){
    if((num1 > num2) && (num1 > num3)){
        return num1;
    }
    
    else if((num2 > num1) && (num2 > num3)){
        return num2;
    }
    else{
        return num3;
    }
}
let biggestNumber = biggest(120,33,110);
console.log("Biggest Number is",biggestNumber);

// using ternary operator
n1 = 15;
n2 = 84;
n3 = 78;
let big = (((n1>n2) && (n1>n3)) ? n1: ((n2>n1) && (n2>n3)) ? n2:n3 );
console.log(big);


// sort the biggest number from an array
const heights = [65,66,68,72,78,60,65,66]

function getMax(numbers){
    let max = numbers[0];
    
   for(let num of numbers){
      if(max < num){
        max = num;
      }
 }
 return max;
}
const max = getMax(heights);

console.log(max)


