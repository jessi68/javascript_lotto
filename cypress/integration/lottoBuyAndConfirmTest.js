import { LOTTO_INVALID_PRICE } from "../../src/js/consts/ErrorMEssage";
import "../../src/js/consts/LottoUiId";
import { PUCHASED_LOTTO_COUNT, PURCHASED_NUMBER } from "../../src/js/consts/LottoUiId";

describe("lotto 구입 테스트", () => {
    before(() => {
        cy.visit("http://127.0.0.1:5500/");
    });
    
    const typePurchasePriceAndClickSubmitButton = (purchasePrice) => {
      cy.get("#" + ID_OF_LOTTO_PRICE_ELEMENT).type(purchasePrice);
      cy.get("#" + PURCHASED_CONFIRM).click();
    };

    it("구입 금액에 5000원을 입력 했을때, 로또 5개가 자동으로 구입되어야 한다."), () => {
        typePurchasePriceAndClickSubmitButton(5000);

        cy.get("#" + PUCHASED_LOTTO_COUNT).should(
          'have.text',
          '총 5개를 구매하였습니다'
        );

        cy.get("#" + PURCHASED_NUMBER)
          .children('span')
          .its('length')
          .then((len) => {
              expect(len).to.equal(5);
          });
    };

    it("구입 금액에 1100원을 입력 했을때, 로또를 구입할 수 없다는 경고 메세지가 뜬다."), () => {
      
      typePurchasePriceAndClickSubmitButton(1100);

      stub = cy.stub()  
      cy.on ('window:alert', stub)
    
      cy.get('@windowAlert').should(
        'be.calledWith',
        LOTTO_INVALID_PRICE,
      );    
      
      cy.get("#"  + PURCHASED_NUMBER)
        .children('span')
        .its('length')
        .then((len) => {
            expect(len).to.equal(0);
        });
  };


});