// Only change code below this line
function mySplice(arr1,arr2,n){
    var helpArr = [];
    for(var i=0; i<arr2.length; i++){
        helpArr.push(arr2[i]);
    }
    for(var i=0; i<arr1.length; i++){
        helpArr.splice(n, 0, arr1[i]);
    }
    return helpArr;
}
// Only change code above this line

console.log(mySplice(["Dell", "Philips"],["Samsung", "AOX", "Sony"],2));