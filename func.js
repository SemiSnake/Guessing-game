window.onload = start
function start() 
{
    //Buttons
    const guessButton = document.getElementById("guessbtn");
    guessButton.onclick = guess;
    const startButton = document.getElementsByClassName("restartbtn");
    startButton.onclick = newGame;
    const hintButton = document.getElementById("hintbtn");
    hintButton.onclick = showHint;

    document.getElementsByClassName("restart").onclick = newGame;
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

    function guess() 
    {
        document.getElementById("number").placeholder = "";
        guessedNumber = document.getElementById("number").value;
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
                document.getElementById("result1").innerHTML = "Du gjettet riktig! Bra jobba!!!!!!!!!!";
                document.getElementById('modalWin').style.display='block';
            }

            console.log(guessedNumber);
            console.log(randomNumber);
        }
        else if(document.getElementById("number").value == "")
        {
            document.getElementById("number").placeholder = "Du må skrive et tall!";
        }
        else 
        {
            attempts--;
            attemptsTxt.innerHTML = attempts;
            document.getElementById("result2").innerHTML = "Game over!";
            document.getElementById('modalFail').style.display='block';
        }
    }

    function showHint() 
    {
        if(document.getElementById("number").value == "") {
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
        randomNumber = (Math.floor(Math.random() * 100) + 1);
        attempts = 10;
        hintAmount = 3;
        document.getElementById('modalFail').style.display='none';
        document.getElementById('modalWin').style.display='none';
    }
}
