// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //json = json.substring(1,json.length-1);
  json = json.replace(/\r\n|\t|\n\r|\n/g,"");
  
  //if string contains \s, we think if there's more than 3, keep 1. Else get rid. 
  //think we may need to search through string and compare current element with previous and next
  if (json.includes("\\\""))


  // array
  function parseArray(array){
    array = array.substring(1,array.length-1);
    var arr = [];
    var elements = array.split(",");

    for (var i=0; i<elements.length; i++){
      //RECURSION 
        arr.push(Number(elements[i]));
    }
    
    return arr;    
  }

  
   //number
   function parseNumber(num){
    //if we find . it's a digit
      if (json.includes()) 
      //if we find E notation it's scientific
    //if we find E notation it's scientific

   }

   function parseString(string){
    return string.substring(1,string.length-1);
   }


   function findType(json){

     if ( json[0]==="[" ) {
       parseArray(json);
     }

     if (typeof json[0] === "number" || json[0] === "-"){
       parseNumber(json);
     }

     //string
     if (json[0]==='"'){
        parseString(json);
     }

     // null
      if (json.includes("null")){
        return null;
      }

     // boolean
     if (json.includes("true")) {
        return true;
     } else if (json.includes("false")) {
        return false;
     }

   }














  // Invocation
  parseJSON(json);

};

 
