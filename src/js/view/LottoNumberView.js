

const lottoTicketIconView = () =>  {
    return `<span class="purchase-result-section__lotto-icon mx-1 text-4xl" id="lottoTicket">
    🎟️
  </span>`;
}

export const lottoTicketInfoView = (numbers, order)  => {
    return `<div class="d-flex">
    ${lottoTicketIconView()}
    <div class="mx-1 mt-1 text-xl">${numbers.join(",")}</div>
    </div>
    `;

}

