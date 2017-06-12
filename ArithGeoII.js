// Arith Geo II

/*Have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. */


function ArithGeoII(arr) { 

     function isArithmetic(arr){
        for( var i = 1; i < arr.length; i++){
            var constant = arr[1] - arr[0];
            if(arr[i] - arr[i - 1] === constant){
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
    
    
    function isGeometric(arr){
        var constant = arr[1]/arr[0];
         for(var i = 1; i < arr.length; i++){
             console.log(arr[i]);
             console.log(i);
           if((arr[i]/arr[i - 1]) === constant){
               continue;
           } else {
               return false;
           }
         }
         return true;
    }
    
    if(isArithmetic(arr)){
        return 'Arithmetic';
    } else if(isGeometric(arr)){
        return 'Geometric';
    } else {
        return -1;
    }
  
}

console.assert(ArithGeoII([2, 4, 6, 8]) === "Arithmetic", "Sequence follows arithmetic pattern");