describe('FizzBuzz',function() {
  let fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      //fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('not divisible by 3', function() {
      //fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function(){
      //fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('not divisible by 5', function(){
      //fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByFive(4)).toBe(false);
    });

    it('divisible by 15', function(){
      //fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });

    it('not divisible by 15', function(){
      //fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByFifteen(14)).toBe(false);
    });
  });

  describe('says Fizz when a number is', function(){
    it('3', function(){
      expect(fizzBuzz.says(3)).toMatch('Fizz');
    });
  });
  describe('says Buzz when a number is', function(){
    it('5', function(){
      expect(fizzBuzz.says(5)).toEqual('Buzz');
    });
  });
  describe('says FizzBuzz when a number is', function(){
    it('15', function(){
      expect(fizzBuzz.says(15)).toMatch('FizzBuzz');
    });
  });



});
