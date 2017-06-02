// Palindrome Two

/*Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. */

function PalindromeTwo(str) { 
    var newStr = str.replace(/[^a-z0-9]+/gi, "");
    if(newStr.split('').reverse().join('').toLowerCase() === newStr.toLowerCase()){
        return true;
    }
  return false; 
} 
