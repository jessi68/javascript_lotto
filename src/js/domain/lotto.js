import getRandomNumber from "../util/RandomGenerator.js"

export class Lotto{

    static DIGIT = 6;
    static PRICE = 1000;
   

    constructor() {
      
        this.numbers = getRandomNumber(Lotto.DIGIT);
      
    }

     getNumbers() {
        return this.numbers;
    }

}

