function fizzbuzz () {
        
        for (let numbers=1; numbers <= 151; numbers++) {

            if (numbers % 3 == 0 && numbers % 5 == 0) {
                console.log("FizzBuzz");
            }

            if (numbers % 3 == 0) {
                console.log("Fizz");
            }

            if (numbers % 5 == 0) {
                console.log("Buzz");
            }
        
        }
}
fizzbuzz();



