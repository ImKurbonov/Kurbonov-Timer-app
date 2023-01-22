let number = document.querySelector('.number')
let playBtn = document.querySelector('.play-btn')
let pauseBtn = document.querySelector('.pause-btn')
let score = 0

playBtn.addEventListener('click', ()=> {
    const timeInterval = setInterval(()=> {
        score++
        number.textContent = score
        number.style.color = 'green'
    }, 1000)

    pauseBtn.addEventListener('click', ()=> {
        clearInterval(timeInterval)
        number.style.color = 'white'
    })
})
