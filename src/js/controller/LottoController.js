import { LOTTO_INVALID_PRICE } from "../consts/ErrorMEssage.js";
import  {PURCHASED_LOTTO_COUNT, PURCHASED_CONFIRM, PURCHASED_NUMBER, SHOW_NUMBER, ID_OF_LOTTO_PRICE_ELEMENT, LOTTO_PRICE_RESULTS} from "../consts/LottoUiId.js";
import Lotto from "../domain/lotto.js"
import  LottoService  from "../service/LottoService.js";
import {lottoTicketInfoView} from "../view/LottoNumberView.js";

export default class LottoController {
    static purchasedNumberView =  document.getElementById(PURCHASED_NUMBER);

    isMoneyValid(price) {
        return price > 0 && price % 1000 == 0 
    }
    
    purchaseLotto(price) {    
        this.number = this.lottoService.purchaseLottos(price);
        const PURCHASE_INFO = `총 ${this.number} 개를 구매하였습니다`
        let element = document.getElementById(PURCHASED_LOTTO_COUNT);
        element.innerHTML = PURCHASE_INFO
    }

    tryPurchaseLottos() {
        let price = parseInt(document.getElementById(ID_OF_LOTTO_PRICE_ELEMENT).value);
        
        if(this.isMoneyValid(price) == true) {
            this.purchaseLotto(price);
        } else{
            alert(LOTTO_INVALID_PRICE)
        }
    }
    
    // showNumber, hideNumber
    showOrHideNumbers() {
        let isOn =  document.getElementById(SHOW_NUMBER).checked;
        let lottos = this.lottoService.getLottos();
        let results = "";
        
        if(isOn)  {

            for(let i = 0; i < this.number; i++) {
                let lotto = lottos[i];
                let numbers = lotto.numbers;
                results += lottoTicketInfoView(numbers, i);
            }
        }
        console.log(results);
        LottoController.purchasedNumberView.innerHTML = results;
    }

    loadBonusNumber() {
        let bonusNumberElement = document.getElementById("bonus-number");
        return parseInt(bonusNumberElement.value)
    }

    loadWinningNumber() {
        let winningNumberElements = document.querySelectorAll("[data-winning]");
        let winningNumbers = {}
        for(let i = 0; i < winningNumberElements.length; i++) {
            let winningNumberElement = winningNumberElements[i];
            let winningNumber = parseInt(winningNumberElement.value)
            if(!winningNumbers.hasOwnProperty(winningNumber))  {
                winningNumbers[winningNumber] = 0
            } else{
                winningNumbers[winningNumber] += 1;
            }
        }
        return winningNumbers
    }

    showLottoStatistics() {
        let winningNumbers = this.loadWinningNumber();
        let bonusNumber = this.loadBonusNumber();
        this.lottoService.evaluateLottos(winningNumbers, bonusNumber);
    }

    initConfigure() {
        document.getElementById(PURCHASED_CONFIRM).addEventListener("click", this.tryPurchaseLottos.bind(this));
        document.getElementById(SHOW_NUMBER).addEventListener("click", this.showOrHideNumbers.bind(this));
        document.getElementById(LOTTO_PRICE_RESULTS).addEventListener("click", this.showLottoStatistics.bind(this));
    }
    
    constructor() {
        this.lottoService = new LottoService();
    }

}