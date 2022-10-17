const currentGame = ["","","","","","","","",""];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let currentPlayer = 'X'

const info = document.querySelector('p')
const gridItems = document.querySelectorAll('.grid-items')
gridItems.forEach(item => item.addEventListener('click', handleClick))

function handleClick(e){
    e.target.textContent = currentPlayer
    currentGame[e.target.getAttribute('data-case')] = currentPlayer
    e.target.removeEventListener('click', handleClick)
    checkVictory()
}

function checkVictory(){
    if (winningCombinations.map(el => el.map(el => currentGame[el]).every(el => el === currentPlayer)).includes(true)) {
        info.textContent = `Victoire du joueur ${currentPlayer}`
        gridItems.forEach(item => item.removeEventListener('click', handleClick))
        return
    } else if (!currentGame.includes('')){
        info.textContent = `Match Nul !!!`
    }else { 
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        info.textContent = `Au tour de ${currentPlayer}`
    }
}

window.addEventListener('keyup', handleKeyboard)

function handleKeyboard(e) {
    console.log(e.code);
    if (e.code === "Space"){
        location.reload()
    }
}