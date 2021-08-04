import { MANUAL_PURCHASE_CONFIRM, INPUT_MANUAL_PURCHASE_PRICE, MANUAL_INPUT_LOTTO_NUM } from "../consts/LottoUiId.js";

export const lottoManualInputView = (index) => {
    return `
    <div id=${index + MANUAL_INPUT_LOTTO_NUM} class=${MANUAL_INPUT_LOTTO_NUM}>
    <input
    type="number"
    class="manual-purchase-number mx-1 text-center"
    />
    <input
    type="number"
    class="manual-purchase-number mx-1 text-center"
    />
    <input
    type="number"
    class="manual-purchase-number mx-1 text-center"
    />
    <input
    type="number"
    class="manual-purchase-number mx-1 text-center"
    />
    <input
    type="number"
    class="manual-purchase-number mx-1 text-center"
    />
    <input
    type="number"
    class="manual-purchase-number mx-1 text-center"
    />
    </div>
`;
}

export const howManyNumberToBuy = () => {
    return `<div>
    <input placeholder="얼마치를 수동 구매하시겠습니까" id=${INPUT_MANUAL_PURCHASE_PRICE}></input>
    <button id=${MANUAL_PURCHASE_CONFIRM}>확인</button>
    </div>
    `
}