import getRandomNumber from "../util/RandomGenerator.js"
import { getPriceResultBy } from "./enum/LottoReward.js";

export default class Lotto{
    static DIGIT = 6;
    static PRICE = 1000;
    #priceResult
    constructor() {
      
        this.numbers = getRandomNumber(Lotto.DIGIT);
      
    }

     getNumbers() {
        return this.numbers;
    }

    saveNumberToCount() {
        this.numberToCount = {}

        for(let i = 0; i < Lotto.DIGIT; i++) {
            if(this.numberToCount.hasOwnProperty(this.numbers[i])) {
                this.numberToCount[this.numbers[i]] += 1;
            } else{
                this.numberToCount[this.numbers[i]] = 1;
            }
        }

    }

    evaluatePriceBy(winningNumbers, bonusNumber) {
        this.saveNumberToCount();
        let equalNumber = 0
        let isBonus = false;
        for(const number in winningNumbers) {
            let count = winningNumbers[number];
            if(this.numberToCount.hasOwnProperty(number)) {
                equalNumber += 1;
            }
        }
        if(this.numberToCount.hasOwnProperty(bonusNumber)) {
            isBonus = true;
        }
        this.#priceResult = getPriceResultBy(equalNumber, isBonus);
    }


    getReward() {
        return this.#priceResult;
    }


}

