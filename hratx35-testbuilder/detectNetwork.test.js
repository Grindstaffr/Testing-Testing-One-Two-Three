/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {

  it('Throws an error so it fails', function() {
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club')
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal('Diner\'s Club')
  });
});

describe('American Express', function() {

  var should = chai.should()

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {

  var should = chai.should();

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  /*var generateTestObject = function(prefix,length) {
    let object = JSON.stringify(prefix);
    let numAddOns = length - object.length
    for (i = 0; i < numAddOns; i++) {
      object += '0';
    }
  };
  */
  var should = chai.should();
  
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123412341234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011567890123456789').should.equal('Discover');
  });
    it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6511123412341234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6500567890123456789').should.equal('Discover');
  });
  
  it('has a prefix of 644 and a length of 16', function(){
    detectNetwork('6444123412341234').should.equal('Discover')
  });
  it('has a prefix of 645 and a length of 16', function(){
    detectNetwork('6454123412341234').should.equal('Discover')
  });
  it('has a prefix of 646 and a length of 16', function(){
    detectNetwork('6464123412341234').should.equal('Discover')
  });
  it('has a prefix of 647 and a length of 16', function(){
    detectNetwork('6474123412341234').should.equal('Discover')
  });
  it('has a prefix of 648 and a length of 16', function(){
    detectNetwork('6484123412341234').should.equal('Discover')
  });
  it('has a prefix of 649 and a length of 16', function(){
    detectNetwork('6494123412341234').should.equal('Discover')
  });
  it('has a prefix of 644 and a length of 19', function(){
    detectNetwork('6444123412341234123').should.equal('Discover')
  });
  it('has a prefix of 645 and a length of 19', function(){
    detectNetwork('6454123412341234123').should.equal('Discover')
  });
  it('has a prefix of 646 and a length of 19', function(){
    detectNetwork('6464123412341234123').should.equal('Discover')
  });
  it('has a prefix of 647 and a length of 19', function(){
    detectNetwork('6474123412341234123').should.equal('Discover')
  });
  it('has a prefix of 648 and a length of 19', function(){
    detectNetwork('6484123412341234123').should.equal('Discover')
  });
  it('has a prefix of 649 and a length of 19', function(){
    detectNetwork('6494123412341234123').should.equal('Discover')
  });
  
});


describe('Maestro', function() {
  /*
   function generateTestObject(prefix,length){
    let object = JSON.stringify(prefix);
    let numAddOns = length - object.length
    for (i = 0; i < numAddOns; i++) {
      object += '0';
    }
  };
  var maestroPrefixes = [5018,5020,5038,6304]
  */

  var should = chai.should();

  it('has a prefix of 5018 and a length of 12', function(){
    detectNetwork('501812341234').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 13', function(){
    detectNetwork('5018123412343').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 14', function(){
    detectNetwork('50181234123434').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 15', function(){
    detectNetwork('501812341234345').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 16', function(){
    detectNetwork('5018123412343456').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 17', function(){
    detectNetwork('50181234123434567').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 18', function(){
    detectNetwork('501812341234345678').should.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 19', function(){
    detectNetwork('5018123412343456789').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 12', function(){
    detectNetwork('502012341234').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 13', function(){
    detectNetwork('5020123412343').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 14', function(){
    detectNetwork('50201234123434').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 15', function(){
    detectNetwork('502012341234345').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 16', function(){
    detectNetwork('5020123412343456').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 17', function(){
    detectNetwork('50201234123434567').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 18', function(){
    detectNetwork('502012341234345678').should.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 19', function(){
    detectNetwork('5020123412343456789').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 12', function(){
    detectNetwork('503812341234').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 13', function(){
    detectNetwork('5038123412343').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 14', function(){
    detectNetwork('50381234123434').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 15', function(){
    detectNetwork('503812341234345').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 16', function(){
    detectNetwork('5038123412343456').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 17', function(){
    detectNetwork('50381234123434567').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 18', function(){
    detectNetwork('503812341234345678').should.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 19', function(){
    detectNetwork('5038123412343456789').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 12', function(){
    detectNetwork('630412341234').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 13', function(){
    detectNetwork('6304123412343').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 14', function(){
    detectNetwork('63041234123434').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 15', function(){
    detectNetwork('630412341234345').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 16', function(){
    detectNetwork('6304123412343456').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 17', function(){
    detectNetwork('63041234123434567').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 18', function(){
    detectNetwork('630412341234345678').should.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 19', function(){
    detectNetwork('6304123412343456789').should.equal('Maestro')
  });
  // Write full test coverage for the Maestro card
  
});

describe('China UnionPay', function(){
  var should = chai.should();

  for (prefix = 622126; prefix <= 622925; prefix++){
    (function(prefix){
      it('has a prefix of' + prefix + 'and a length of 16', function(){
        detectNetwork((prefix.toString()+'1234567890')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 17', function(){
        detectNetwork((prefix.toString()+'12345678901')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 18', function(){
        detectNetwork((prefix.toString()+'123456789012')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 19', function(){
        detectNetwork((prefix.toString()+'1234567890123')).should.equal('China UnionPay')
      });
    })(prefix);
  }

  for (prefix = 16; prefix <= 19; prefix++){
    (function(prefix){
      it('has a prefix of' + prefix + 'and a length of 16', function(){
        detectNetwork((prefix.toString()+'12341234567890')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 17', function(){
        detectNetwork((prefix.toString()+'123412345678901')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 18', function(){
        detectNetwork((prefix.toString()+'1234123456789012')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 19', function(){
        detectNetwork((prefix.toString()+'12341234567890123')).should.equal('China UnionPay')
      });
    })(prefix);
  }

  for (prefix = 6282; prefix <= 6288; prefix++){
    (function(prefix){
      it('has a prefix of' + prefix + 'and a length of 16', function(){
        detectNetwork((prefix.toString()+'121234567890')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 17', function(){
        detectNetwork((prefix.toString()+'1122345678901')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 18', function(){
        detectNetwork((prefix.toString()+'11223456789012')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 19', function(){
        detectNetwork((prefix.toString()+'112234567890123')).should.equal('China UnionPay')
      });
    })(prefix);
  }

  for (prefix = 624; prefix <= 626; prefix++){
    (function(prefix){
      it('has a prefix of' + prefix + 'and a length of 16', function(){
        detectNetwork((prefix.toString()+'1123234567890')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 17', function(){
        detectNetwork((prefix.toString()+'12123345678901')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 18', function(){
        detectNetwork((prefix.toString()+'113223456789012')).should.equal('China UnionPay')
      });
      it('has a prefix of' + prefix + 'and a length of 19', function(){
        detectNetwork((prefix.toString()+'1212334567890123')).should.equal('China UnionPay')
      });
    })(prefix);
  }                
});

describe('Switch', function(){
  var should = chai.should();
  var switchPrefixes = ['4903', '4905', '4911', '4936', '6333', '6759']

  for (prefixIndex = 0; prefixIndex < switchPrefixes.length; prefixIndex++){
    (function(prefixIndex){
      it('has a prefix of' + switchPrefixes[prefixIndex] + 'and a length of 16', function(){
        detectNetwork((switchPrefixes[prefixIndex].toString() + '123456789012')).should.equal('Switch')
      });
      it('has a prefix of' + switchPrefixes[prefixIndex] + 'and a length of 18', function(){
        detectNetwork((switchPrefixes[prefixIndex].toString() + '12345678901234')).should.equal('Switch')
      });
      it('has a prefix of' + switchPrefixes[prefixIndex] + 'and a length of 19', function(){
        detectNetwork((switchPrefixes[prefixIndex].toString() + '123456789012345')).should.equal('Switch')
      });
    })(prefixIndex);
  }

  it('has a prefix of 564182 and a length of 16', function(){
    detectNetwork(('5641821234567890')).should.equal('Switch')
  });
  it('has a prefix of 564182 and a length of 18', function(){
    detectNetwork(('564182345678901234')).should.equal('Switch')
  });
  it('has a prefix of 564182 and a length of 19', function(){
        detectNetwork(('5641823456789012345')).should.equal('Switch')
  });

  it('has a prefix of 633110 and a length of 16', function(){
    detectNetwork(('6331101234567890')).should.equal('Switch')
  });
  it('has a prefix of 633110 and a length of 18', function(){
    detectNetwork(('633110345678901234')).should.equal('Switch')
  });
  it('has a prefix of 633110 and a length of 19', function(){
        detectNetwork(('6331103456789012345')).should.equal('Switch')
  });

});
