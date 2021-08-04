import { INPUT_MANUAL_PURCHASE_PRICE, MANUAL_INPUT_LOTTO_NUM, MANUAL_PURCHASE_CONFIRM, PURCHASE_MANUALLY } from "../../src/js/consts/LottoUiId";


describe("lotto 구입 테스트", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5500/");
    });
    
    const typePurchasePriceAndClickManualSubmitButton = (autoPurchasePrice, manualPurchasePrice, numbers) => {
      cy.get('input[id="'+ ID_OF_LOTTO_PRICE_ELEMENT  + '"]').type(autoPurchasePrice);
      cy.get('button[id="'+ PURCHASE_MANUALLY  + '"]').click();
      cy.get('input[id="' + INPUT_MANUAL_PURCHASE_PRICE  + '"]').type(manualPurchasePrice);
      cy.get('button[id="'+ MANUAL_PURCHASE_CONFIRM  + '"]').click();
      cy.get('[class=' + MANUAL_INPUT_LOTTO_NUM + '"]').should('have.length', 2);
      cy.get('[class=' + MANUAL_INPUT_LOTTO_NUM + '"]').each((inputs, index) => {
        inputs.children().each((input, lottoNumIndex) => {
          input.type(numbers[index][lottoNumIndex].toString());
        });
      });


      

    };

    it("로또 금액에 3000원을 입력하고 수동 구매 버튼을 누른 이후 구입할 갯수에 2개를 누른 경우 수동구매 2개, 자동 구매 1개가 잘 된다.", () => {
      typePurchasePriceAndClickManualSubmitButton(3000, 2000);
      cy.get('span[id="lottoTicket"]')
        .its('length')
        .then((len) => {
            expect(len).to.equal(3);
        });

    });
});