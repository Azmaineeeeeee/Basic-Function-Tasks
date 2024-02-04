// remove duplicate items from an array
let array = [];
function removeDuplicate(names){
     for(let i of names){
        if(array.includes(i) === false){
            array.push(i);
        }
     }
}
removeDuplicate(['a','b','c','f','a','b','a','a','f'])
console.log(array);