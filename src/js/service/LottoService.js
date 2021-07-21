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
}