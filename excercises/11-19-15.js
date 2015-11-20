/**
 * Created by rodrigocespedes on 11/19/2015.
 */
function inverseString(word)
{
    if(arguments.length == 0)
    {
        return "";
    }
    else
    {
        var newString = "";
        for (var index = word.length - 1; index >= 0; index--) {
            newString = newString + word[index];
        }
        return newString;
    }
}

console.log("Inverse ", inverseString("abc"));


function getFactorial(number)
{
    if(typeof(number) !== 'number')
        throw number + " Is not a number";

    var factorial = 1;
    while(number !==0){
        factorial *= number--;
    }
    return factorial;
}

var num = 15;
console.log("Factorial of ", num ," is ", getFactorial(num));



function getParagraph(paragraph, number)
{
    if(typeof(number) !== 'number')
        throw number + " Is not a number";

    if(typeof(paragraph) !== 'string')
        throw paragraph + " Is not a string";

    if(paragraph.length > number)
    return paragraph.substr(0, number);
}

var par = "Hola Mundo Bienvenido";
var num = 7;
console.log("Paragraph ", par ," the truncate is ==>", getParagraph(par, num));

