import { getJSONByRewardKey } from "../domain/enum/LottoReward.js";
import Lotto from "../domain/lotto.js";
import getRandomNumber from "../util/RandomGenerator.js";

export default class LottoService {

    init() {
        this._lottos  = [];
        this._lottos.length = 0;
        this._lottoNum = 0
        this._expenditure = 0;
        this._sales = 0;
        this.lottoPriceToCount = getJSONByRewardKey();
        console.log(this._lottos);
        console.log(this.lottoPriceToCount);
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
        console.log(this._lottos);
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