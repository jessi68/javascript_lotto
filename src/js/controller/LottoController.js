import Lotto from "../domain/lotto.js"
import  LottoService  from "../service/LottoService.js";
import {showLottoToggledOn} from "../view/LottoNumberView.js";

export default class LottoController {
    static ID_OF_LOTTO_PRICE_ELEMENT = "로또 금액 입력 칸"
    static toggleButtonId = "번호 보기";
    static purchasedNumberView =  document.getElementById("구입한 번호들");

    isMoneyValid(price) {
        return price > 0 && price % 1000 == 0 
    }
    

    purchaseLotto(price) {
        
        this.number = this.lottoService.purchaseLottos(price);
        const PURCHASE_INFO = `총 ${this.number}  개를 구매하였습니다`
        let element = document.getElementById("구입 개수");
        element.innerHTML = PURCHASE_INFO
    }

    tryPurchaseLottos() {
        let price = parseInt(document.getElementById(LottoController.ID_OF_LOTTO_PRICE_ELEMENT).value);
        
        if(this.isMoneyValid(price) == true) {
            this.purchaseLotto(price);
        } else{
            alert("입력이 잘못되었습니다.")
        }
    }
    
    // showNumber, hideNumber
    showNumbers() {
        let isOn =  document.getElementById(LottoController.toggleButtonId).checked;
        let lottos = this.lottoService.getLottos();
        let results = "";
        console.log(isOn);
        if(isOn)  {

            for(let i = 0; i < this.number; i++) {
                let lotto = lottos[i];
                let numbers = lotto.numbers;
                results += showLottoToggledOn(numbers);
            }
        }
        console.log(results);
        LottoController.purchasedNumberView.innerHTML = results;
    }

    initConfigure() {
        document.getElementById("구입 확인").addEventListener("click", this.tryPurchaseLottos.bind(this));
        document.getElementById("번호 보기").addEventListener("click", this.showNumbers.bind(this));
    }
    
    constructor() {
        this.lottoService = new LottoService();
    }

}
 // const $showResultButton = document.querySelector('.open-result-modal-button')
    // const $modalClose = document.querySelector('.modal-close')
    // const $modal = document.querySelector('.modal')
    // const $lottoNumbersToggleButton = document.querySelector(
    // '.lotto-numbers-toggle-button'
    // )

    // const onModalShow = () => {
    // $modal.classList.add('open')
    // }

    // const onModalClose = () => {
    // $modal.classList.remove('open')
    // }

    // $showResultButton.addEventListener('click', onModalShow)
    // $modalClose.addEventListener('click', onModalClose)