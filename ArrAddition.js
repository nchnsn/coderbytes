// Arr Addition

/*Using the JavaScript language, have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. */

function ArrayAddition(arr) { 
    var largestNumber = Math.max(...arr);
    for(var i = 0; i < arr.length; i++){
        var total = i;
        if(i === largestNumber){
            return true;
        }
        
        for(var j = 0; j < arr.length; j++){
            console.log('i ' + i);
            console.log('j ' + j);
            if(arr[j] === arr[i]){
                continue;
            }

            total += arr[j];
            console.log(total);
            if(total === largestNumber){
                return true;
            }
        }
    }
    return false;            
}