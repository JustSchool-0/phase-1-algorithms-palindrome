function isPalindrome(word) {
    const lowerCase = word.toLowerCase();
    return lowerCase === lowerCase.split('').reverse().join('');
}

/* 
  convert word to lowercase
  check if word === word reversed
  return result
*/

/*
- Make the string case-insensitive.
- Reverse the sequence of characters.
- Check if the reversed string matches the original.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("madam"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
