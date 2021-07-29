

export const incomeProportionView = (incomeProportion) => {
    return `<p class="text-center font-bold">당신의 총 수익률은 ${incomeProportion / 100}%입니다.</p>`;
}

export const lottoAwardView = (reward, count) => {
    return   `  <td class="p-3">${reward["equalNumber"]} 개</td>
                <td class="p-3">${reward["price"]} 개</td>
                <td class="p-3">보너스 볼 ${+reward["isBonus"]} 개</td>
                <td class="p-3">${count} 개</td>
            `;
}

