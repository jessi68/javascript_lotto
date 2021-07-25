import { LOTTO_INVALID_PRICE } from "../../src/js/consts/ErrorMEssage";
import "../../src/js/consts/LottoUiId";
import { PURCHASED_LOTTO_COUNT, PURCHASED_NUMBER, ID_OF_LOTTO_PRICE_ELEMENT, PURCHASED_CONFIRM, SHOW_NUMBER } from "../../src/js/consts/LottoUiId";



describe("lotto 구입 테스트", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5500/");
    });
    
    const typePurchasePriceAndClickSubmitButton = (purchasePrice) => {
      cy.get('input[id="'+ ID_OF_LOTTO_PRICE_ELEMENT  + '"]').type(purchasePrice);
      cy.get('button[id="'+ PURCHASED_CONFIRM  + '"]').click();
    };

    it("구입 금액에 5000원을 입력 했을때, 로또 5개가 자동으로 구입되어야 한다.", () => {
        typePurchasePriceAndClickSubmitButton(5000);
        cy.get('label[id="'+ PURCHASED_LOTTO_COUNT + '"]').should(
          'have.text',
          '총 5 개를 구매하였습니다'
        )

        cy.get('input[id="'+ SHOW_NUMBER + '"]').click({force: true});

        cy.get('span[id="lottoTicket"]')
        .its('length')
        .then((len) => {
            expect(len).to.equal(5);
        });

    });


  });

  