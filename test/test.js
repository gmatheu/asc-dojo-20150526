var assert = require('assert')
var should = require('should');
var fizzBuzz = require('../lib/lib');

describe('FizzBuzz', function() {
  describe('#process', function() {
    it('should return same input', function() {
      fizzBuzz.process(1).should.eql(1);
      });
      it('should return FIZZ', function() {
        fizzBuzz.process(3).should.eql("FIZZ");
      });
      it('should return BUZZ', function() {
        fizzBuzz.process(5).should.eql("BUZZ");
      });
      it('should return FIZZBUZZ', function() {
        fizzBuzz.process(15).should.eql("FIZZBUZZ");
      });
      // it('should fail with str', function() {
      //   fizzBuzz.process("15").should.fail();
      // });
    })

    describe('#minesweeper', function() {
      it('should empty when board is empty', function() {
        fizzBuzz.minesweeper([]).should.eql([]);
      });
      it('should be 0', function() {
        fizzBuzz.minesweeper([['.']]).should.eql([['0']]);
      });
      it('should be *', function() {
        fizzBuzz.minesweeper([['*']]).should.eql([['*']]);
      });
      it('should be *', function() {
        fizzBuzz.minesweeper([['*','.']]).should.eql([['*', '1']]);
      });
    })
})





















// it('when input is 3 return Fizz', function() {
//   fizzBuzz.process(3).should.eql([1,2,"Fizz"]);
// })
// it('when input is 5 return 1,2,Fizz,4,Buzz', function() {
//   fizzBuzz.process(5).should.eql([1,2,"Fizz",4,"Buzz"]);
// })
// it('when input is 6 return 1,2,Fizz,4,Buzz,Fizz', function() {
//   fizzBuzz.process(6).should.eql([1,2,"Fizz",4,"Buzz","Fizz"]);
// })
// it('when input is 9 return 1,2,Fizz,4,Buzz,Fizz .... Fizz', function() {
//   fizzBuzz.process(9).should.eql([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz"]);
// })
// it('when input is 15 return 1,2,Fizz,4,Buzz,Fizz .... Fizz', function() {
//   fizzBuzz.process(15).should.eql([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz","Fizz",14,"FizzBuzz"]);
// })
// it('when the input has a 3, expect Fizz', function() {
//   fizzBuzz.process(13)[12].should.eql("Fizz");
//   fizzBuzz.process(23)[22].should.eql("Fizz");
// })
