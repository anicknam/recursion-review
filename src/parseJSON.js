// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  json = json.substring(1,json.length-1);
  // array
  if ( json[0]==="[" ) {
    var arr = [];
    var i = 0;
    while (json[i]!== "]") {
      arr.push(json[i]);
      i++;
    }
  }
};
