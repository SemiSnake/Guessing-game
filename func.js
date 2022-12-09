window.onload = start
function start() {
    var x = 1;
    var array = [0, 1, 2, 3, 4, 5];
    for (i in array) {
        console.log(array[i]);
    }

    const guessButton = document.getElementById("button1");
    guessButton.onclick = guess;
    var randomNumber;
    var guessedNumber;
    randomNumber = (Math.floor(Math.random() * 100) + 1)
    var attempts = 10;
    function guess() 
    {
        guessedNumber = document.getElementById("number").value;
        if (guessedNumber > randomNumber) {
            attempts--;
            console.log("Lavt");
            //document.getElementById("Error").innerHTML = "Tallet ditt var for høyt! Du har " + attempts + " forsøk igjen!";
        }
        else if (guessedNumber < randomNumber) {
            attempts--
            console.log("høyt");
            //document.getElementById("Error").innerHTML = "Tallet ditt var for lavt! Du har " + attempts + " forsøk igjen!";
        }
        else {
            //document.getElementById("Error").innerHTML = "Du gjettet riktig! Bra jobba!!!!!!!!!!";
        }
        console.log(guessedNumber);
        console.log(randomNumber);
    }

    function newGame() 
    {
        randomNumber = (Math.floor(Math.random() * 100) + 1);
    }
}
