

const lottoTicketIconView = () =>  {
    return `<span class="purchase-result-section__lotto-icon mx-1 text-4xl">
    🎟️
  </span>`;
}

export const lottoTicketInfoView = (numbers)  => {
    return `<div class="d-flex">
    ${lottoTicketIconView()}
    <span class="mx-1 mt-1 text-xl">${numbers.join(",")}</span>
    </div>
    `;

}

