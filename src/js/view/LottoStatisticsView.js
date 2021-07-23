

export const incomeProportionView = (incomeProportion) => {
    return `<p class="text-center font-bold">당신의 총 수익률은 %${incomeProportion}입니다.</p>`;
}

export const lottoPriceView = (correctLottoNumber, price, peopleNum) => {
    return   `<tr class="text-center" id="lottoPrice${correctLottoNumber}">
                <td class="p-3">${correctLottoNumber}개</td>
                <td class="p-3">${price}</td>
                <td class="p-3">${peopleNum}개</td>
            </tr>`;
}

