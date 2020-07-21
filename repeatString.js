function repeatString(string, number){

    var result = "";
    
    for (let index = 0; index < number; index++) {
        
        result += string;
        
    }
    return result;
}

console.log(repeatString("car", 4));