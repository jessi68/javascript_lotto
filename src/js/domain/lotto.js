import getRandomNumber from "../util/RandomGenerator.js"
import { getPriceResultBy } from "./enum/LottoReward.js";

export default class Lotto{

    #priceResult
    static #MIN
    static #MAX
    static #DIGIT
    static #PRICE

    static initLottoInfo() {
        Lotto.#MIN = 1;
        Lotto.#MAX = 45;
        Lotto.#DIGIT = 6;
        Lotto.#PRICE = 1000;
    }

    constructor() {
        this.numbers = getRandomNumber(Lotto.#DIGIT, Lotto.#MIN, Lotto.#MAX);
    }

    static isValidNumbers(numbers) {
        numbers.forEach(function(number) {
            if(!Lotto.isLottoNumberValid(number)) {
                return false;
            }
        })
        return true;
    }

    static isLottoNumberValid(num)  {
        if(num >= Lotto.#MIN && num <= Lotto.#MAX) {
          return true;
        }
        return false;
    }

    static isValidForBuyLotto(price) {
        return price > 0 && price % Lotto.#PRICE == 0
    }

    static lottoCountBuyWith(price) {
        return price / Lotto.#PRICE;
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

