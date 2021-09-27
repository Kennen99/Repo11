// Only change code below this line
function myMutation(arr){
    var duzina = arr[0].length;
    if(arr[1].length > duzina){
        duzina = arr[1].length;
    }
    else{
        // mjenjamo red od manjeg do veceg zbog petlje
        var pom = arr[0];
        arr[0] = arr[1];
        arr[1] = pom;
    }
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    for(var i=0; i<arr[0].length; i++){
        var mozda = false;
        for(var j=0; j<arr[1].length; j++){
            if(arr[0][i] == arr[1][j]){
                mozda = true;
                break;
            }
        }
        if(mozda === false){ 
            return false;
        }
    }
    return true;
}
// Only change code above this line

console.log(myMutation(["MistralArena", "MaestralArena"]));
module.exports = myMutation;