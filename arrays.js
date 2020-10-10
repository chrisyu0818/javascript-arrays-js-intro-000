var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array =[1]
  array = ['element', ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  const array = [1]
  array.unshift(element)
  console.log(array);
  return;
}
