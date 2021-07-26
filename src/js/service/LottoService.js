import Lotto from "../domain/lotto.js";

export default class LottoService {

    static lottoPrice = 1000;
    constructor() {
        this.lottos = []
        this.lottoNum = 0
    }
    
     purchaseLottos(price) {

        this.lottoNum = price / LottoService.lottoPrice;

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
            let price = this.lottos[i].getPriceMoney();
            if(this.lottoPriceToCount.hasOwnProperty(price)) {
                this.lottoPriceToCount[price] += 1
            } else{
                this.lottoPriceToCount[price] = 1
            }
        }
        console.log(this.lottoPriceToCount)
    }

    calculateProfits() {
        let expenditure  = LottoService.lottoPrice * this.lottoNum;
        let sales = 0
        for(let i = 0; i < this.lottoNum; i++) {
            sales += this.lottos[i].getPriceMoney();
        }
        let profit = sales - expenditure;
        return profit;
    }
}