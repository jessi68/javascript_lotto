import getRandomNumber from "../util/RandomGenerator.js"
import { getPriceResultBy } from "./enum/LottoReward.js";

export default class Lotto{
    static DIGIT = 6;
    static PRICE = 1000;
   
    constructor() {
      
        this.numbers = getRandomNumber(Lotto.DIGIT);
      
    }

     getNumbers() {
        return this.numbers;
    }

    countEachNumber() {
        this.numberToCount = {}

        for(let i = 0; i < Lotto.lDIGIT; i++) {
            if(this.numberToCount.hasOwnProperty(this.numbers[i])) {
                this.numberToCount[this.numbers[i]] += 1;
            } else{
                this.numberToCount[this.numbers[i]] = 0;
            }
        }

    }

    evaluatePriceBy(winningNumbers, bonusNumber) {
        this.countEachNumber();
        let equalNumber = 0
        let isBonus = false;
        for(const number in winningNumbers) {
            let count = winningNumbers[number];
            if(this.numberToCount.hasOwnProperty(number)) {
                equalNumber += Math.min(count, this.numberToCount[number]);
            }
        }
        if(this.numberToCount.hasOwnProperty(bonusNumber)) {
            isBonus = true;
        }
        this.priceResult = getPriceResultBy(equalNumber, isBonus);
    }

}

