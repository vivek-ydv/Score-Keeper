const pl1 = {
    score: 0,
    display: document.querySelector("#pl1-score"),
    button: document.querySelector("#pl1-btn")
}

const pl2 = {
    score: 0,
    display: document.querySelector("#pl2-score"),
    button: document.querySelector("#pl2-btn")
}

const rangeUptoEl = document.querySelector("#range");
const resetButtonEl = document.querySelector("#reset-btn");
let winningScore = 5;
let isGameOver = false;

rangeUptoEl.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.classList.add('btn-stuck');
            opponent.button.classList.add('btn-stuck');
        }
        player.display.textContent = player.score;
    }
}

pl1.button.addEventListener('click', function () {
    updateScore(pl1, pl2);
});

pl2.button.addEventListener('click', function () {
    updateScore(pl2, pl1);
});


resetButtonEl.addEventListener('click', reset);
function reset() {
    pl1.score = 0;
    pl2.score = 0;
    isGameOver = false;
    pl1.display.textContent = 0;
    pl2.display.textContent = 0;
    pl1.display.classList.remove('winner', 'loser');
    pl2.display.classList.remove('winner', 'loser');
    pl1.button.classList.remove('btn-stuck');;
    pl2.button.classList.remove('btn-stuck');;
}



