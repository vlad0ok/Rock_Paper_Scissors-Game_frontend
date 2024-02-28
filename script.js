function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return 'It\'s a tie!';
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    }

    return 'Computer wins!';
}

function updateGame(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    const resultDisplay = document.querySelector('.whowin');
    const computerChoiceDisplay = document.querySelector('.choosecomputer');

    resultDisplay.textContent = result;
    computerChoiceDisplay.textContent = `Computer choose: ${computerSelection}`;
}

function restartGame() {
    const resultDisplay = document.querySelector('.whowin');
    const computerChoiceDisplay = document.querySelector('.choosecomputer');
    
    resultDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        updateGame(button.textContent);
    });
});

const restartButton = document.getElementById('btnrestart');
restartButton.addEventListener('click', restartGame);
