/**
 * Created by rodrigocespedes on 11/12/2015.
 */

var paragraph = 'Hello World to All'

var countWords = function(paragraph){

    var count = paragraph.split(' ');
    return count.length;
};




console.log('Paragraf has ', countWords(paragraph), ' Words')

/** evaluar metodos de integer

function evalNumbers(a,b,c)
{
    console.log('Arguments: ', arguments);

    var max = Math.max(a, b, c);
    var min = Math.min(arguments);

    //console.log('sum ', sum );
    console.log('max ', max );
    console.log('min ', min );
    //console.log('ave ', ave );

}

console.log(evalNumbers(5,6,7))*/


function printDate(a,b,c)
{
    var today = new Date();
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    console.log("Today is :", weekday[today.getDay()]);

    console.log("Time is :", hour(today.getHours()), today.getMinutes() + "", " : ", "" + today.getSeconds());
}

function hour(h)
{
    if(h>12)
        return h-12 + "PM :";
    else
        return h + "AM :";
}

console.log(printDate());


var expresionRegular = new RegExp('/^[0-9].{5}$/');

'http://rubular.com/'



