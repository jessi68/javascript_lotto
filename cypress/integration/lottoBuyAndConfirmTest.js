import { resolveConfig } from "prettier";
import { LOTTO_ERROR_MESSAGE, LOTTO_INVALID_PRICE } from "../../src/js/consts/ErrorMEssage";
import "../../src/js/consts/LottoUiId";
import { PURCHASED_LOTTO_COUNT, PURCHASED_NUMBER, ID_OF_LOTTO_PRICE_ELEMENT, PURCHASED_CONFIRM, SHOW_NUMBER } from "../../src/js/consts/LottoUiId";
import Lotto from "../../src/js/domain/lotto";



describe("lotto 구입 테스트", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5500/");
    });
    
    const typePurchasePriceAndClickSubmitButton = (purchasePrice) => {
      cy.get('input[id="'+ ID_OF_LOTTO_PRICE_ELEMENT  + '"]').type(purchasePrice);
      cy.get('button[id="'+ PURCHASED_CONFIRM  + '"]').click();
    };

    it("로또 금액이 1000 보다 작은 경우 1000보다 크거나 같은 가격을 입력하라는 경고 메세지가 나와야 한다.", () => {
      typePurchasePriceAndClickSubmitButton(700);
      cy.on('window:alert', (text) => {
        expect(text).to.equal(LOTTO_ERROR_MESSAGE.INVALID_PRICE);
      });
  
    
    })

    it("로또 금액이 1000보다 크지만  1000의 배수가 아닌 경우 1000의 배수를 입력해야 한다는 메세지가 나와야 한다.", () => {
      typePurchasePriceAndClickSubmitButton(1700);
      cy.on('window:alert', (text) => {
        expect(text).to.equal(LOTTO_ERROR_MESSAGE.INVALID_PRICE);
      })
    })
   
    it("구입 금액에 5000원을 입력 했을때, 로또 5개가 자동으로 구입되어야 한다. 구입된 로또의 번호 범위가 1~45 여야 한다.", () => {
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

  