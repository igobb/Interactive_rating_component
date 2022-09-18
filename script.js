const container = document.querySelector('.container')
const second_window = document.querySelector('.second_window')
const submitButton = document.getElementById('submit')
const againButton = document.getElementById('rate-again')
const rateResult = document.getElementById('rate-result')
const lowResult = document.getElementById('low-result')
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
        rateResult.innerHTML = result
        
        if (result < 3) {
            lowResult.innerHTML = " (What can we do to improve our services?)";
        }
        else {
            lowResult.innerHTML = " (Thanks!)";
        }
        
    })
})

if (rates < 3) {
    lowResult.innerText = " (What can we do to improve our services?)";
}






//also working
//     submitButton.addEventListener('click', () => {
//     second_window.classList.remove('hidden')
//     container.style.display = 'none'
// })

//     againButton.addEventListener('click', () => {
//     second_window.classList.add('hidden')
//     container.style.display = 'block'
// })
