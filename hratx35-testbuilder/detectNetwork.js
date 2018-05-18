// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var dinersPrefixes = ['38', '39']
  var amexPrefixes = ['34', '37']
  var masterCardPrefixes = ['51', '52', '53', '54', '55']
  var visaLengths = [13, 16, 19]
  var maestroPrefixes = ['5018', '5020', '5038', '6304']
  var maestroLengths = [12,13,14,15,16,17,18,19]
  var discoverPrefixes = ['6011', '644', '645','646', '647', '648', '649', '65']
  var discoverLengths = [16, 19]
  var switchPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']
  var switchLengths = [16, 18, 19]
  var chinaUnionPrefixes = ['16','17', '18', '19', '624', '625','626']

  function buildCUPprefixes() {
  	for (i = 622126; i <= 622925; i++){
  		chinaUnionPrefixes.push(i.toString());
  	}
  	for (j = 6282; j <= 6288; j++){
  		chinaUnionPrefixes.push(j.toString());
  	}
    return chinaUnionPrefixes
  }  

  buildCUPprefixes()

  if (cardNumber.length == 14 && dinersPrefixes.includes(cardNumber.slice(0,2))) {
  	return 'Diner\'s Club';
  } else if (cardNumber.length == 15 && amexPrefixes.includes(cardNumber.slice(0,2))) {
  	return 'American Express';
  } else if ((switchPrefixes.includes(cardNumber.slice(0,4)) || switchPrefixes.includes(cardNumber.slice(0,6))) && switchLengths.includes(cardNumber.length)) {
    return 'Switch'
  } else if (visaLengths.includes(cardNumber.length) && (cardNumber.slice(0,1) == '4')){
  	return 'Visa';
  } else if (masterCardPrefixes.includes(cardNumber.slice(0,2)) && cardNumber.length == 16){
    return 'MasterCard';
  } else if (maestroPrefixes.includes(cardNumber.slice(0,4)) && maestroLengths.includes(cardNumber.length)) {
    return 'Maestro';
  } else if ((discoverPrefixes.includes(cardNumber.slice(0,3)) || discoverPrefixes.includes(cardNumber.slice(0,4)) || discoverPrefixes.includes(cardNumber.slice(0,2))) && discoverLengths.includes(cardNumber.length)) {
    return 'Discover';
  } else if ((chinaUnionPrefixes.includes(cardNumber.slice(0,2)) || chinaUnionPrefixes.includes(cardNumber.slice(0,3)) || chinaUnionPrefixes.includes(cardNumber.slice(0,4)) || chinaUnionPrefixes.includes(cardNumber.slice(0,6))) && (cardNumber.length >= 16 && cardNumber.length <=19)) {
  	return 'China UnionPay';
  } else {
  	return 'other' + cardNumber + '...' + cardNumber.length + '...';
  }

};


