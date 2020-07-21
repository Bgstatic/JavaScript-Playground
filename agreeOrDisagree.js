// Write your function here:
const agreeOrDisagree = (param1, param2) => {
  
    param1 = param1.toString();
    param2 = param1.toString();

  if(param1 === param2){
    
    return "You agree!"

  }
  else {

   return "You disagree!"

  }
  
}

// Uncomment the line below when you're ready to try out your function
 console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'
