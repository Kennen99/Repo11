// Only change code below this line
var myNestedArray = [["Jaba", 1]];
function myNestedFunction(arr){
    myNestedArray.pop();
    myNestedArray.push(["Toblerone", 5], ["Milka", 3]);
    return myNestedArray;
}
// Only change code above this line
console.log(myNestedFunction());
module.exports = myNestedFunction;