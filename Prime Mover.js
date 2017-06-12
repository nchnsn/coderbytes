// Prime Mover

/*Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. */
/**/
/*Use the Parameter Testing feature in the box below to test your code with different arguments.*/

function PrimeMover(num) {
    var numOfPrimes = 0;
    var currentPrime = null;
    for(var i = 2; num > numOfPrimes; i++){
        if (isPrime(i)){
            numOfPrimes++; 
            currentPrime = i;
        }
    }
    return currentPrime;     
}

function isPrime(num){
   for(var i = num - 1; i > 1; i--){
      if(num % i === 0){
          return false;
      }
   }
   return true;
}

console.assert(PrimeMover(16) === 53, 'Returns the numrth Prime Number';