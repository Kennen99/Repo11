// Only change code below this line
var myNestedArray = [["Jaba", 1]];
function myNestedFunction(arr){
    myNestedArray.pop();
    for(var i=0; i<arr.length; i++){
        myNestedArray.push(arr[i]);
    }
    return myNestedArray;
}
// Only change code above this line
console.log(myNestedFunction([["Toblerone", 5],["Milka", 3]]));
module.exports = myNestedFunction;