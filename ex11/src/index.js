// Only change code below this line
function splitArrayInGroups(arr,n){
    var result = [];
    var duzina = arr.length;
    if(arr.length>n*n){
        duzina = n*n;
    }
    for(var i=0; i<duzina; i++){
        var pomoc = [];
        for(var j=0; j<n; j++){
            pomoc.push(arr[i]);
            i++;
            if(i==duzina) break;
        }
        i--;
        result.push(pomoc);
    }
    return result;
}
// Only change code above this line

console.log(splitArrayInGroups([0,1,2,3,4,5,6,7,8],2));
module.exports = splitArrayInGroups;