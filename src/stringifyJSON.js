// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //numbers, null, boolean
  if (typeof obj === "number" || obj === null || typeof obj === "boolean") {
    return "" + obj;
  }
  //array
  if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return "[" + arr.join(',') + "]"; 
  }
  //object
  if (typeof obj === "object") {
    var arr = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === "function") {
        continue;
      }
      arr.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    return "{" + arr.join(',') + "}";
  }
  //string
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
  
  //functions, undefined
  if (typeof obj === "function" || obj === undefined) {
    return ;
  }
};
