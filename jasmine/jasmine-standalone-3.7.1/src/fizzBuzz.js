class FizzBuzz {
  isDivisibleByThree(number) {
    return (number % 3 === 0);
  }

  isDivisibleByFive(number) {
    return (number % 5 === 0);
  }

  isDivisibleByFifteen(number) {
    //return (number % 15 === 0);
    if (this.isDivisibleByFive(number) && this.isDivisibleByThree(number)){
      return true;
    }
    else {
      return false;
    }
  }

  says(number) {
    if(this.isDivisibleByFifteen(number)){
      return 'FizzBuzz';
    }
    else if(this.isDivisibleByThree(number)){
      return 'Fizz';
    }
    else if(this.isDivisibleByFive(number)){
      return 'Buzz';
    }
    else {
      return number;
    }
  }

  oneToOneHundred() {
    for (let i = 0; i < 101; i++) {
      console.log(this.says(i));
    }
  }


}
