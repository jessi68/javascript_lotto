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
    
    it(" 로또 3개 구입 했을때, 생성된 로또 번호가 1~45 범위 안에 있는지 테스트 ", () => {
      
        lottoService.purchaseLottos(3000);
        let lottos = lottoService.getLottos();
        expect(lottos.length, 3);
        lottos.forEach(function(lotto) {
            expect(Lotto.isLottoNumberValid(lotto.getNumbers()), true);
        })
    });



});