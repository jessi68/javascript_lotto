import Lotto from "../domain/lotto.js"
import  LottoService  from "../service/LottoService.js";



export default class LottoController {
    static ID_OF_LOTTO_PRICE_ELEMENT = "로또 금액 입력 칸"

    
    purchaseLottos() {
        let price = parseInt(document.getElementById(LottoController.ID_OF_LOTTO_PRICE_ELEMENT).value);
        this.number = this.lottoService.purchaseLottos(price);
        const PURCHASE_INFO = `총 ${this.number}  개를 구매하였습니다`
        let element = document.getElementById("구입 개수");
        element.innerHTML = PURCHASE_INFO
    }



    showNumbers() {
        let externalForm = document.getElementById("구입한 번호들");
        let lottos = this.lottoService.getLottos();

        for(let i = 0; i < this.number; i++) {
            let lotto = lottos[i];
            let new_list = document.createElement('ul');
            let numbers = lotto.numbers;
            new_list.innerHTML = numbers.toString();
            externalForm.appendChild(new_list);
        }
    }

    initConfigure() {
        document.getElementById("구입 확인").addEventListener("click", this.purchaseLottos.bind(this));
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