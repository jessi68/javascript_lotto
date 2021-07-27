import Lotto from "../domain/lotto.js";

export default class LottoService {

    constructor() {
        this.lottos = []
        this.lottoNum = 0
    }
    
     purchaseLottos(price) {

        this.lottoNum = Lotto.lottoCountBuyWith(price);
        this.expenditure = price;
        for(let i = 0; i < this.lottoNum; i++) {
            this.lottos.push(new Lotto());
        }

        return this.lottoNum;
    }

    getLottos() {
        return this.lottos;
    }

    evaluateLottos(winningNumbers, bonusNumber) {
        this.lottoPriceToCount = {}
        for(let i = 0;  i < this.lottoNum;  i++) {
            this.lottos[i].evaluatePriceBy(winningNumbers, bonusNumber);
            let reward = this.lottos[i].getReward();
            if(this.lottoPriceToCount.hasOwnProperty(reward)) {
                this.lottoPriceToCount[JSON.stringify(reward)] += 1
            } else{
                this.lottoPriceToCount[JSON.stringify(reward)] = 1
            }
        }
        return this.lottoPriceToCount
    }

    calculateProfits() {
        this.sales = 0
        for(let i = 0; i < this.lottoNum; i++) {
            this.sales += this.lottos[i].getPriceMoney();
        }
        this.profit = this.sales - this.expenditure;
        return this.profit;
    }
}