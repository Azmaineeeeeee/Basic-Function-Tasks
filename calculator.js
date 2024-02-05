function add(x,y){
   let add = x+y;
   return add;
}
function subtract(x,y){
   let subtract = x-y;
   return subtract;
}
function multiply(x,y){
   let multiply = x*y;
   return multiply;
}
function divide(x,y){
   let divide = x/y;
   return divide;
}

function calculator(x,y,operation){
    if(typeof x !== "number" || typeof y !== "number" || typeof operation !== 'string'){
        return "Please send a valid argument as datatype"
    }
    else{
        if(operation === 'add'){
            return `Result is, ${add(x,y)}`
        }
        else if(operation === 'subtract'){
            return `Result is, ${subtract(x,y)}`
        }
        else if(operation === 'multiply'){
            return `Result is, ${multiply(x,y)}`
        }
        else if(operation === 'divide'){
            return `Result is, ${divide(x,y)}`
        }
        else{
            return "You can only perform add,subtract,multiply, and divide operation"
        }
    }
}
let result = calculator(10,12,'divide')
console.log(result);