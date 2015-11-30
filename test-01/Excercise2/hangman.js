/**
 * Created by rodrigocespedes on 11/30/2015.
 */
/**
 * This Function is Auto-executable
 */
(function hangmanGame()
    {
        var poolWords = ["JAVASCRIPT", "MONITORING", "SQLSERVER", "FUNDATION", "JALASOFT"];
        var indexRandom = Math.floor((Math.random() * 5));
        var wordChose = poolWords[indexRandom];
        var wordUnknown = createWord(wordChose.length);
        console.log('You Have 10 Attempts')
       for(var i = 0;i < 10;i++)
        {
            console.log(displayResponse(wordUnknown));

            do{
                var letter = prompt("Attempt number " + i + ", Please enter one LETTER");
            }while(letter.length != 1);
            wordUnknown = verifyIfExistLetter(wordUnknown, letter.toUpperCase(), wordChose);

            var win = verifyWin(wordUnknown);

            if(win == 0)
            {
                console.log("You Win..!")
                console.log("THE WORD IS: "+displayResponse(wordUnknown));
                i = 11;
            }
        }
    }
)();

function verifyWin(wordUnknown)
{
    var count = 0;
    for(var i = 0;i < wordUnknown.length;i++)
    {
        if(wordUnknown[i] == '-')
        {
            count++;
        }
    }
    return count;
}

function displayResponse(wordUnknown)
{
    var word = '';
    for(var i = 0;i < wordUnknown.length;i++)
    {
        word = word + wordUnknown[i];
    }
    return word;
}

function verifyIfExistLetter(wordUnknown, letter, wordChose)
{
    var word = wordUnknown;
    for(var i = 0;i < wordChose.length;i++)
    {
        if(wordChose[i] == letter)
        {
            word[i] = letter;
        }
    }
    return word;
}

function createWord(size)
{
    var word = [];
    for(var j = 0;j < size;j++)
    {
        word[j] = '-';
    }
    return word;
}