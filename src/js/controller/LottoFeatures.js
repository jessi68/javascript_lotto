import {Lotto} from "../domain/lotto.js"

const ID_OF_LOTTO_PRICE_ELEMENT = "로또 금액 입력 칸"
var lottos = [];
var lottoNum = 0;
var a = 2;

function updatePurchaseNum(number) {
    const PURCHASE_INFO = `총 ${number}  개를 구매하였습니다`

    let element = document.getElementById("구입 개수");
    
    element.innerHTML = PURCHASE_INFO
}

export default function purchaseLotto() {

    var price = parseInt(document.getElementById(ID_OF_LOTTO_PRICE_ELEMENT).value);
     a = 100;
    const lottoPrice = 1000;
   
  
    while(price > 0) {

        lottos.push(new Lotto());
        
        price -= lottoPrice;
        lottoNum += 1;
    }

    updatePurchaseNum(lottoNum)

    return lottos;
}



export function showNumbers() {
    
    let externalForm = document.getElementById("구입한 번호들");

  
    for(let i = 0; i < lottoNum; i++) {
        let lotto = lottos[i];
        let new_list = document.createElement('ul');
        let numbers = lotto.numbers;
        new_list.innerHTML = numbers.toString();
        externalForm.appendChild(new_list);
    

    }
}