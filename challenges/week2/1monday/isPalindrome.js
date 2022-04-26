function isPalindrome(line) {
  const lineConverted = String(line);
  return lineConverted.split('').reverse().join('')===lineConverted;
}

isPalindrome('madam');  // true
isPalindrome('Madam');  // false (case matters)
isPalindrome("madam i'm adam"); // false (all characters matter)
isPalindrome('356653'); // true