var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  const array = [1]
  array.unshift('element')
  console.log(array);
  return;
}
