

export const incomeProportionView = (incomeProportion) => {
    return `<p class="text-center font-bold">당신의 총 수익률은 %${incomeProportion}입니다.</p>`;
}

export const lottoPriceView = (reward, lottoNum) => {
    return   `  <td class="p-3">${reward["equalNumber"]} 개</td>
                <td class="p-3">보너스 볼 ${+reward["isBonus"]} 개</td>
                <td class="p-3">${reward["price"]} 개</td>
                <td class="p-3">${lottoNum} 개</td>
            `;
}

