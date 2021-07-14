import Lotto from "../domain/lotto.js"

const ID_OF_LOTTO_PRICE_ELEMENT = "로또 금액 입력 칸"
const lottos = [];


function updatePurchaseNum(number) {
    const PURCHASE_INFO = `총 ${number}  개를 구매하였습니다`

    let element = document.getElementById("구입 개수");
    console.log(element)
    element.innerHTML = PURCHASE_INFO
}

export default function purchaseLotto() {

    var price = parseInt(document.getElementById(ID_OF_LOTTO_PRICE_ELEMENT).value);
    console.log(document.getElementById(ID_OF_LOTTO_PRICE_ELEMENT))
    const lottoPrice = 1000;
    let lottoNum = 0;
    console.log(price)
    while(price > 0) {

        lottos.push(new Lotto());
        price -= lottoPrice;
        lottoNum += 1;
    }

    console.log(lottoNum);
    updatePurchaseNum(lottoNum)
}



