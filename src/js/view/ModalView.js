


const $lottoNumbersToggleButton = document.querySelector(
    '.lotto-numbers-toggle-button'
)

const onModalShow = () => {
        $modal.classList.add('open')
}

const onModalClose = () => {
    $modal.classList.remove('open')
}

$showResultButton.addEventListener('click', onModalShow)
$modalClose.addEventListener('click', onModalClose)

