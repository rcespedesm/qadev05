/**
 * Created by rodrigocespedes on 11/30/2015.
 */


function vowels(paragraph)
{
    var count = 0;
    for(var i = 0; i < paragraph.length;i++)
    {
        if(paragraph[i].toLowerCase() === 'a' || paragraph[i].toLowerCase() === 'e' || paragraph[i].toLowerCase() === 'i' || paragraph[i].toLowerCase() === 'o' || paragraph[i].toLowerCase() === 'u') {
            count++;

        }
    }
    return count;
}

var paragraph = "This is a paragraph";

console.log("Total vowels", vowels(paragraph));