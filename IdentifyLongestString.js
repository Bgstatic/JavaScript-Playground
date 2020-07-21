function longestString(string){

    var rawString = string.split(" ");
    let biggestwordlength = 0;
    var biggestword = " ";

    for (let index = 0; index < rawString.length; index++) {
        
        if (rawString[index].length > biggestwordlength) {
            
            biggestwordlength = rawString[index].length;
            biggestword = rawString[index];
        }
    }
    return biggestword;
}

console.log(longestString("My favorite day is Friday"));