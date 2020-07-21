function isPalindrome(string){

    string = string.replace(/\W/g, '').toLowerCase();

    return string == string.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));