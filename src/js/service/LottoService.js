import { getJSONByRewardKey } from "../domain/enum/LottoReward.js";
import Lotto from "../domain/lotto.js";
import getRandomNumber from "../util/RandomGenerator.js";

export default class LottoService {

    constructor() {
        this._lottos = []
        this._lottoNum = 0
        this._expenditure = 0;
        this._sales = 0;
    }

    static isValidForBuyLotto(price) {
        return price > 0 && price % Lotto.PRICE == 0
    }

    static lottoCountBuyWith(price) {
        return price / Lotto.PRICE;
    }

    purchaseLotto(numbers) {
        this._expenditure += Lotto.PRICE;
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
        this.lottoPriceToCount = getJSONByRewardKey();
        for(let i = 0;  i < this._lottoNum;  i++) {
            this._lottos[i].giveAwardBy(winningNumbers, bonusNumber);
            let reward = this._lottos[i].getReward();
            this.lottoPriceToCount[JSON.stringify(reward)] += 1
        }
        this.calculateProfits();
        return this.lottoPriceToCount
    }

    calculateProfits() {
        for(let i = 0; i < this._lottoNum; i++) {
            this._sales += this._lottos[i].getPriceMoney();
        }
        this.profit = this._sales - this._expenditure;
        return this.profit;
    }

    getProfit() {
        return this.profit;
    }
}