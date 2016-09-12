
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
// your code here
//node = node || document.body;

var results=[];

function checkNode(node){

  if (_.indexOf(node.classList,className)>=0) {
    results.push(node);
  }

  for (var i=0;i<node.childNodes.length;i++){
    checkNode(node.childNodes[i]);
  }
  // _.each(node.childNodes,function(child){
  //   checkNode(child);
  // })

}
  checkNode(document.body);

  return results;
};
