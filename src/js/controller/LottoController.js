import { LOTTO_ERROR_MESSAGE } from "../consts/ErrorMEssage.js";
import  {PURCHASED_LOTTO_COUNT, PURCHASED_CONFIRM, PURCHASED_LOTTO_NUMBERS, SHOW_NUMBER, INPUT_PURCHASE_PRICE, LOTTO_PRICE_RESULTS, RESTART} from "../consts/LottoUiId.js";
import Lotto from "../domain/lotto.js"
import  LottoService  from "../service/LottoService.js";
import { $, clearHTML, clearInput } from "../util/dom.js";
import {lottoTicketInfoView} from "../view/LottoNumberView.js";
import { purchasedNumView } from "../view/LottoPurchase.js";
import { incomeProportionView, lottoAwardView } from "../view/LottoStatisticsView.js";

export default class LottoController {
   
    purchaseLotto(price) {    
        this.number = this.lottoService.purchaseLottosAutomatic(price);
        this.$purchasedResult.innerHTML = purchasedNumView(this.number);
    }

    tryPurchaseLottos() {
        let price = parseInt(this.$inputPrice.value.trim());
        
        if(LottoService.isValidForBuyLotto(price)) {
            this.purchaseLotto(price);
        } else{
            alert(LOTTO_ERROR_MESSAGE.INVALID_PRICE)
        }
    }
    
    // showNumber, hideNumber
    showOrHideLottoNumbers() {
        let isOn =  this.$toggleButton.checked;
        let lottos = this.lottoService.getLottos();
        let results = "";
        
        if(isOn)  {

            for(let i = 0; i < this.number; i++) {
                let lotto = lottos[i];
                let numbers = lotto.numbers;
                results += lottoTicketInfoView(numbers, i);
            }
        }
        this.$lottoNumbersView.innerHTML = results;
    }

    loadBonusNumber() {
        return parseInt(this.$bonusWinningNumber.value)
    }

    loadWinningNumber() {
        let winningNumberElements = this.$winningNumbers;
        let winningNumbers = {}

        for(let i = 0; i < winningNumberElements.length; i++) {
            let winningNumberElement = winningNumberElements[i];
            let winningNumber = parseInt(winningNumberElement.value)

            if(!winningNumbers.hasOwnProperty(winningNumber))  {
                winningNumbers[winningNumber] = 1
            } else{
                winningNumbers[winningNumber] += 1;
            }
        }
        return winningNumbers
    }

    makeModalContent(lottoPriceToCount) {
        if(this.modalContent !== undefined)  {
            return;
        }
        
        for(const reward in lottoPriceToCount) {
            this.modalContent = document.createElement("tr");
            this.modalContent.className = "text-center";
            this.modalContent.innerHTML = lottoAwardView(JSON.parse(reward), lottoPriceToCount[reward]);
            this.modalContent.innerHTML += incomeProportionView(this.lottoService.getProfit());
            this.modalBody.appendChild(this.modalContent);
        }
    }

    showLottoStatistics() {
        let winningNumbers = this.loadWinningNumber();
        let bonusNumber = this.loadBonusNumber();
        const lottoPriceToCount = this.lottoService.evaluateLottos(winningNumbers, bonusNumber);
        this.makeModalContent(lottoPriceToCount);
        this.$modal.classList.add('open')
    }

    onModalClose() {
        this.$modal.classList.remove('open');

    }

    restart() {
        this.init();
        clearInput(this.$inputPrice);
        clearHTML(this.$lottoNumbersView)
        clearText(this.$purchasedResult);
        clearHTML(this.modalBody)
    }

    restrictInputTooMuch(event)  {
        let curOrder = parseInt(event.target.getAttribute("data-winning"));
        console.log(curOrder)
        console.log(event.target.value)
        if(event.target.value.length == 2 && curOrder < 6) {
            console.log("ddd");
            this.$winningNumbers[curOrder + 1].focus();
        }
    }

    connectViewAndModel() {
        document.getElementById(PURCHASED_CONFIRM).addEventListener("click", this.tryPurchaseLottos.bind(this));
        this.$toggleButton.addEventListener("click", this.showOrHideLottoNumbers.bind(this));
        document.getElementById(LOTTO_PRICE_RESULTS).addEventListener("click", this.showLottoStatistics.bind(this));
        this.$restart.addEventListener("click", this.restart.bind(this));
        this.$modalClose.addEventListener('click', this.onModalClose.bind(this));
        console.log(this.$winningNumbers)
        this.$winningNumbers.forEach(function($winningNumber) {
            $winningNumber.addEventListener('input', this.restrictInputTooMuch.bind(this));
        }.bind(this));
    }
    
    init() {
        this.lottoService = new LottoService();
        this.$modalClose = document.querySelector('.modal-close');
        this.$modal = document.querySelector('.modal');
        this.modalContent = undefined;
        this.modalBody = document.getElementById("modal-tbody");
        this.$lottoNumbersView = $(PURCHASED_LOTTO_NUMBERS);
        this.$purchasedResult = $(PURCHASED_LOTTO_COUNT);
        this.$inputPrice = $(INPUT_PURCHASE_PRICE);
        this.$toggleButton = $(SHOW_NUMBER);
        this.$restart = $(RESTART);
        this.$winningNumbers = document.querySelectorAll("[data-winning]");
        this.$bonusWinningNumber = $("bonus-number");
        this.connectViewAndModel();
    }

}