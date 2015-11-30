/**
 * Created by rodrigocespedes on 11/30/2015.
 */

function printFrame()
{
    if (arguments.length < 0)
    throw ('Do not exist arguments');

    var list = arguments[0];
    var max = maxValue(list);
    displayFrame(list, max);
}

function maxValue(list)
{
    var max = 0;
    for(var i = 0; i < list.length;i++)
    {
        if(list[i].length > max)
        max = list[i].length;
    }
    return max;
}

function displayFrame(list, max)
{
    var line = '';
    for(var t = 0; t < max + 2;t++)
    {
        line = line + "*";
    }
    console.log(line);
    for(var i = 0; i < list.length;i++)
    {
        if(list[i].length < max)
        {
            var miss = max - list[i].length;
            for(var j = 0; j < miss;j++)
            {
                list[i] = list[i] + " ";
            }
        }

        console.log('*' + list[i] + '*');

    }
    console.log(line);
}



var listValues = ["Hello", "World", "in", "a", "frame"]
console.log('List Of Words', printFrame(listValues));