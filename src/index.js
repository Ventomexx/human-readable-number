module.exports = function toReadable (number) {
  if (number === 0) {return 'zero'}
  let numMiddle = 0;
  let numSingle = 0;
  let arr = [];
  single = {
    one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, 
    nineteen: 19};
  denary = {error: 0, error1: 1, twenty: 2, thirty: 3, forty: 4, fifty: 5, sixty: 6, seventy: 7, eighty: 8, ninety: 9};
  function getUnderTwenty (num) {
    for (let key in single) {if (single[key] === num) {arr.push(key)}}
  }
  function getDenary (num) {
    for (let key in denary) {if (denary[key] === num) {arr.push(key)}}
  }
  
  if (number > 99) { 
    getUnderTwenty (Math.floor(number / 100));
    arr.push('hundred')
    numMiddle = Math.floor((number % 100)/10);
    numSingle = Math.floor(number % 10);
    if (numMiddle > 1) {getDenary(numMiddle); getUnderTwenty(numSingle)}
    else {getUnderTwenty(number % 100)}
  }
  
  else if (number > 19) {
    numMiddle = Math.floor(number / 10);
    numSingle = Math.floor(number % 10);
    getDenary (numMiddle);
    getUnderTwenty (numSingle)
  }
  else {getUnderTwenty (number)}
  return arr.join(' ');
}
