// function doubleIt(num){
//     return num * 2;
// }
// const doubleIt = function(num){
//     return num * 2;
// }
// const doubleIt = num => num * 2;
// const add = (x, y) => x + y;

// const addition = add(5,7);
// const result = doubleIt(4);
// console.log(addition);
const doMath = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const result = add * diff;
    return result;
}
const result2 = doMath(5,3);
console.log(result2);

