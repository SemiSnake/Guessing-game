window.onload = start
function start() {
    //Buttons
    const guessButton = document.getElementById("guessbtn");
    guessButton.onclick = guess;
    const startButton = document.getElementsByClassName("restartbtn");
    startButton.onclick = newGame;
    const hintButton = document.getElementById("hintbtn");
    hintButton.onclick = showHint;

    //Attempts
    var attemptsTxt = document.getElementById("attemptsTxt");
    var attempts = 10;

    //Hints
    var hintAmount = 3;
    var hint =  "Gjett et tall først!";
    var hintTxt = document.getElementById("hint").innerHTML = hintAmount;

    //Numbers
    var randomNumber = (Math.floor(Math.random() * 100) + 1);
    var guessedNumber;

    function guess() {
        guessedNumber = document.getElementById("number").value;
        if (attempts > 0) {
            if (guessedNumber > randomNumber) {
                attempts--;
                hint = "Tallet er lavere";
                document.getElementById("Error").innerHTML = "Tallet ditt var for høyt! Du har " + attempts + " forsøk igjen!";
            }
            else if (guessedNumber < randomNumber) {
                attempts--;
                hint = "Tallet er høyere";
                document.getElementById("Error").innerHTML = "Tallet ditt var for lavt! Du har " + attempts + " forsøk igjen!";
            }
            else {
                document.getElementById("result").innerHTML = "Du gjettet riktig! Bra jobba!!!!!!!!!!";
                document.getElementById('modalWin').style.display='block';
            }

            console.log(guessedNumber);
            console.log(randomNumber);
        }
        else {
            document.getElementById("result").innerHTML = "Game over!";
            document.getElementById('modalFail').style.display='block';
        }
    }

    function showHint() {
        if (hintAmount > 3) {
            document.getElementById("hint").innerHTML = hint;
            hintAmount--;
        }
        else {
            document.getElementById("hint").innerHTML = "Du har ikke flere hint igjen";
        }
    }

    function newGame() {
        randomNumber = (Math.floor(Math.random() * 100) + 1);
        attempts = 10;
        hintAmount = 3;
        document.getElementById('modalFail').style.display='none';
        document.getElementById('modalWin').style.display='none';
    }
}
