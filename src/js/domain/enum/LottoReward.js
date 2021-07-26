{/* <tr class="text-center">
<td class="p-3">3개</td>
<td class="p-3">5,000</td>
<td class="p-3">n개</td>
</tr>
<tr class="text-center">
<td class="p-3">4개</td>
<td class="p-3">50,000</td>
<td class="p-3">n개</td>
</tr>
<tr class="text-center">
<td class="p-3">5개</td>
<td class="p-3">1,500,000</td>
<td class="p-3">n개</td>
</tr>
<tr class="text-center">
<td class="p-3">5개 + 보너스볼</td>
<td class="p-3">30,000,000</td>
<td class="p-3">n개</td>
</tr>
<tr class="text-center">
<td class="p-3">6개</td>
<td class="p-3">2,000,000,000</td>
<td class="p-3">n개</td> */}

let DEFAULT_BONUS_VALUE = false

export const lottoRewardBy = [
	 {
		"price": 200000000,
        "rank": "1등",
        "equalNumber": 6,
        isBonus: DEFAULT_BONUS_VALUE
	},
    {
        price: 30000000,
        rank: "2등",
        equalNumber: 5, 
        isBonus: true
    },
    {
        price: 1500000,
        rank: "3등",
        equalNumber: 5,
        isBonus: DEFAULT_BONUS_VALUE
    },
    {
        price: 50000,
        rank: "4등",
        equalNumber: 4, 
        isBonus: DEFAULT_BONUS_VALUE
    },
     {
        price:5000,
        rank: "5등",
        equalNumber: 3, 
        isBonus: DEFAULT_BONUS_VALUE
    }, 
    {
        price: 0,
        rank: "등수 없음"
    } 
]

function isSecondPrice(isBonus, RewardBonus, winningNumberCount)  {
    return isBonus == true && RewardBonus == true && winningNumberCount == 5
}

export function getPriceResultBy(winningNumberCount, isBonus) {
    console.log(winningNumberCount, isBonus);
    for(let i = 0; i < lottoRewardBy.length - 1; i++) {
        let reward = lottoRewardBy[i];
        if(isSecondPrice(isBonus, reward.isBonus, winningNumberCount)) {
            return reward;
        }
        if(reward.equalNumber == winningNumberCount) {
            return reward;
        }
    }
    return lottoRewardBy[lottoRewardBy.length - 1];
}

