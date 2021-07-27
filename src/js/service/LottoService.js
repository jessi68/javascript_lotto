import Lotto from "../domain/lotto.js";
import getRandomNumber from "../util/RandomGenerator.js";

export default class LottoService {

    constructor() {
        this._lottos = []
        this._lottoNum = 0
        this.expenditure = 0;
        this.sales = 0;
    }

    static isValidForBuyLotto(price) {
        return price > 0 && price % Lotto.PRICE == 0
    }

    static lottoCountBuyWith(price) {
        return price / Lotto.PRICE;
    }

    purchaseLotto(numbers) {
        this.expenditure += Lotto.PRICE;
        this._lottos.push(new Lotto(numbers));
        this._lottoNum += 1;
    }

    purchaseLottosAutomatic(price) {
        let purchasedNum = LottoService.lottoCountBuyWith(price);
        for(let i = 0; i < purchasedNum; i++) {
            this.purchaseLotto(getRandomNumber(Lotto.DIGIT, Lotto.MIN, Lotto.MAX));
        }
        return purchasedNum;
    }

    purchaseLottosByManual(numbers)  {
        let purchasedNum = numbers.length;
        for(let i = 0; i < purchasedNum; i++) {
            this.purchaseLotto(numbers[i]);
        }
        return purchasedNum;
    }

    getLottos() {
        return this._lottos;
    }

    evaluateLottos(winningNumbers, bonusNumber) {
        this.lottoPriceToCount = {}
        for(let i = 0;  i < this._lottoNum;  i++) {
            this._lottos[i].giveAwardBy(winningNumbers, bonusNumber);
            let reward = this._lottos[i].getReward();
            if(this.lottoPriceToCount.hasOwnProperty(reward)) {
                this.lottoPriceToCount[JSON.stringify(reward)] += 1
            } else{
                this.lottoPriceToCount[JSON.stringify(reward)] = 1
            }
        }
        return this.lottoPriceToCount
    }

    calculateProfits() {
        for(let i = 0; i < this._lottoNum; i++) {
            this.sales += this._lottos[i].getPriceMoney();
        }
        this.profit = this.sales - this.expenditure;
        return this.profit;
    }
}