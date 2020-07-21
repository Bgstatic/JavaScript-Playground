function unique(string){

    for(var i = 0; i < string.length; i++){

       if(string.indexOf(string[i]) !== string.lastIndexOf(string[i])){
        
        return false;

       }
       
    }
    return true;
}

(unique("abcsea"));