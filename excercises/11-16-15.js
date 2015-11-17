/**
 * Created by rodrigocespedes on 11/16/2015.
 */

function firstCapicua(ranMin, ranMax)
{
    if(ranMin < ranMax)
    {
        do {
            if (isCapicua(ranMin)) {
                return ranMin;
            }
            else {
                ranMin++;
            }

        } while (ranMin < ranMax)
        return -1; //do not exist Capicua
    }
    else
    {
        throw "Invalid Range";
    }
}



function isCapicua(num)
{
    var limit = num.toString();
    var newString = "";
    for(var index = limit.length-1 ; index >= 0 ; index--)
    {
        newString = newString + limit[index];
    }

    if(limit == newString)
        return true;
    else
        return false;
}


console.log("First Capicua: ", firstCapicua(100, 102));