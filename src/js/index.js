import  {showNumbers} from "./controller/LottoFeatures.js"
import purchaseLotto  from "./controller/LottoFeatures.js"

const $showResultButton = document.querySelector('.open-result-modal-button')
const $modalClose = document.querySelector('.modal-close')
const $modal = document.querySelector('.modal')
const $lottoNumbersToggleButton = document.querySelector(
  '.lotto-numbers-toggle-button'
)

const onModalShow = () => {
  $modal.classList.add('open')
}

const onModalClose = () => {
  $modal.classList.remove('open')
}


$showResultButton.addEventListener('click', onModalShow)
$modalClose.addEventListener('click', onModalClose)





document.getElementById("구입 확인").addEventListener("click", purchaseLotto);
document.getElementById("번호 보기").addEventListener("click", showNumbers);