const container = document.querySelector('.container')
const second_window = document.querySelector('.second_window')
const submitButton = document.getElementById('submit')
const againButton = document.getElementById('rate-again')
const rateResult = document.getElementById('rate-result')
const rates = document.querySelectorAll('.rating')

submitButton.addEventListener('click', () => {
    second_window.classList.remove('hidden')
    container.classList.add('hidden')
})

againButton.addEventListener('click', () => {
    container.classList.remove('hidden')
    second_window.classList.add('hidden')
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        let result = rate.innerHTML
        if (result < 3) {
            result = result + " (CZEMU TAK MAŁO :<)"
        }
        rateResult.innerHTML = result
    })
})

//also working
//     submitButton.addEventListener('click', () => {
//     second_window.classList.remove('hidden')
//     container.style.display = 'none'
// })

//     againButton.addEventListener('click', () => {
//     second_window.classList.add('hidden')
//     container.style.display = 'block'
// })
