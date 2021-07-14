import Lotto from "../domain/lotto.js"

const ID_OF_LOTTO_PRICE_ELEMENT = "로또 금액 입력 칸"
const lottos = [];


function updatePurchaseNum(number) {
    const PURCHASE_INFO = `총 ${number}  개를 구매하였습니다`

    let element = document.getElementById("구입 개수");
    
    element.innerHTML = PURCHASE_INFO
}

export default function purchaseLotto() {

    var price = parseInt(document.getElementById(ID_OF_LOTTO_PRICE_ELEMENT).value);
   
    const lottoPrice = 1000;
    let lottoNum = 0;
  
    while(price > 0) {

        lottos.push(new Lotto());
        price -= lottoPrice;
        lottoNum += 1;
    }

 
    updatePurchaseNum(lottoNum)

    return lottos;
}



