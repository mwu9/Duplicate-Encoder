function duplicateEncode(word){
    let result = ""; 
    
    for (let i = 0; i < word.length; i++){
      
      //So the indexOf will return first occurrence of the value and 
      //lastIndexOf will return the last occurence of the value.
      
          if (word.indexOf(word[i]) === word.lastIndexOf(word[i])){
              result += "("; //unique letter, only appears once
          } else {
              result += ")"; //not unique letter, appears more than once
    }
    }
    return result;
    }
    
    console.log(duplicateEncode("din"));
    console.log(duplicateEncode("blogger"));
    console.log(duplicateEncode("sucess"));
    console.log(duplicateEncode("recede"));
    
    
    let anyString = "Brave new world";
    let a = anyString.indexOf("l"); // result = 13
    let b = anyString.lastIndexOf("l"); // result 13
    
    console.log(a);
    console.log(b);
    
    
    let secondString = "Brave new world";
    let c = secondString.indexOf("w"); // result = 13
    let d = secondString.lastIndexOf("w"); // result 13
    
    console.log(c);
    console.log(d);
    