window.onload = start
function start() 
{
    //Buttons
    const guessButton = document.getElementById("guessbtn");
    guessButton.onclick = guess;

    const startButton1 = document.getElementById("restart1");
    startButton1.onclick = newGame;
    const startButton2 = document.getElementById("restart2");
    startButton2.onclick = newGame;
    const startButton3 = document.getElementById("restart3");
    startButton3.onclick = newGame;
    
    const hintButton = document.getElementById("hintbtn");
    hintButton.onclick = showHint;

    //Attempts
    var attempts = 10;
    var attemptsTxt = document.getElementById("attemptsTxt");
    attemptsTxt.innerHTML = attempts;

    //Hints
    var hintAmount = 3;
    var hint =  "Gjett et tall først!";
    var hintTxt = document.getElementById("hint");
    hintTxt.innerHTML = hintAmount;

    //Numbers
    var randomNumber = (Math.floor(Math.random() * 100) + 1);
    var guessedNumber;
    var hasGuessedNumber = 0;

    //Thermostat value
    /* const thermostatDiv = document.getElementById("thermostatDiv"); */
    

    function guess() 
    {
        document.getElementById("number").placeholder = "";
        guessedNumber = document.getElementById("number").value;
        let difference = Math.abs(guessedNumber-randomNumber);
        console.log(difference);
        //thermostatDiv.style.height = -difference - 100;
        if (attempts > 1 && document.getElementById("number").value != "") 
        {
            document.getElementById("number").value = "";
            if (guessedNumber > randomNumber) {
                attempts--;
                attemptsTxt.innerHTML = attempts;
                hint = "Tallet ditt er for høyt!";
            }
            else if (guessedNumber < randomNumber) {
                attempts--;
                attemptsTxt.innerHTML = attempts;
                hint = "Tallet ditt er for lavt!";
            }
            else {
                attempts--;
                attemptsTxt.innerHTML = attempts;
                document.getElementById('modalWin').style.display='block';
            }

            console.log(guessedNumber);
            console.log(randomNumber);

            hasGuessedNumber = 1;
        }
        else if(document.getElementById("number").value == "")
        {
            document.getElementById("number").placeholder = "Du må skrive et tall!";
        }
        else 
        {
            attempts--;
            attemptsTxt.innerHTML = attempts;
            document.getElementById('modalFail').style.display='block';
        }
    }

    function showHint() 
    {
        if(hasGuessedNumber == 1) {
            if (hintAmount > 0) {
                document.getElementById("number").placeholder = hint;
                hintAmount--;
                hintTxt.innerHTML = hintAmount;
            }
            else 
            {
                document.getElementById("number").placeholder = "Du har ikke flere hint igjen";
            }
        }
        else {
            document.getElementById("number").placeholder = "Du må skrive et tall!";
        }
    }

    function newGame() 
    {
        location.reload();
    }
}
