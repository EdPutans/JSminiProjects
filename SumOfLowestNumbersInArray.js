function sumTwoSmallestNumbers(numbers) {  
  console.log(numbers)
  var smallest=Math.min(...numbers)
  var toDeleteFirst=numbers.indexOf(smallest)
  numbers.splice(toDeleteFirst,1)
  var smallest2=Math.min(...numbers)
  var toDeleteSecond=numbers.indexOf(smallest2)
  numbers.splice(toDeleteSecond,1)
  return smallest+smallest2
};