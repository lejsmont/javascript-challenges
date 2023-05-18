/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
    const reverseStr =  str.split('').reverse().join('')
    
    return reverseStr === str
    
}

function isPalindrome2(str) {
    let reverseStr = ""

    for (let i = 0; i<str.length; i++) {
        reverseStr += str[str.length-i-1]
    }

    return reverseStr === str
}

// Test your function
console.log(isPalindrome2("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome2("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));