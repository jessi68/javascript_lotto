import { lottoRewardBy } from "../../src/js/domain/enum/LottoReward";
import Lotto from "../../src/js/domain/lotto";
import LottoService from "../../src/js/service/LottoService";

describe("로또 구입 관련 알고리즘들이 제대로 작동하는지 테스트한다.", () => {
    let lottoService;
    beforeEach(() => {
        cy.visit("http://localhost:5500/");
        lottoService = new LottoService();
    //lottoService.purchaseLottos();
    // let lottos = lottoService.getLottos();
    });
    
    it("로또 3개 구입 했을때, 생성된 로또 번호가 1~45 범위 안에 있는지 테스트 ", () => {
      
        lottoService.purchaseLottosAutomatic(3000);
        let lottos = lottoService.getLottos();
        expect(lottos.length, 3);
        lottos.forEach(function(lotto) {
            expect(Lotto.isLottoNumberValid(lotto.getNumbers()), true);
        })
    });

    it("당첨 번호에 따라 로또 등수를 알맞게 부여하는 기능", () => {
        let lottoNumbers = [[1, 3, 7, 9, 11, 45], [1, 2, 3, 4, 7, 45]];
        lottoService.purchaseLottosByManual(lottoNumbers);
        let lottoPriceToCount = lottoService.evaluateLottos({"1": 1, "3": 1, "45": 1, "7": 1, "9":1, "4":1}, 11);
        expect(lottoPriceToCount[lottoRewardBy[1]], 1);
        expect(lottoPriceToCount[lottoRewardBy[2]], 1);
    });



});