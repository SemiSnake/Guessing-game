window.onload = start
function start()
{
    var x = 1;
    var array = [0, 1, 2, 3, 4, 5];
    for (i in array) {
        console.log(array[i]);
    }

    const guessButton = document.getElementById("button1");
    guessButton.onclick = guess;
    var randomNumber;
    var guessedNumber;
    function guess() 
    {
        guessedNumber = document.getElementById("number").value;
        if(guessedNumber > randomNumber)
        {
            
        }
        console.log(guessedNumber);
        console.log(randomNumber);
    }

    function newGame()
    {
        randomNumber = (Math.floor(Math.random() * 100) + 1);
    }
}
