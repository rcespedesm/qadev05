/**
 * Created by rodrigocespedes on 11/16/2015.
 */

console.log("Evaluate: ", evaluate(15,8,3,4,5,6))

function evaluate(a, b, c)
{
    console.log('Arguments: ', arguments);

    var su = sum(arguments, arguments.length-1);
    var ma = max(0, arguments, arguments.length-1);
    var mi = min(9999999, arguments, arguments.length-1);
    var av = avg(arguments, 0, arguments.length);
    console.log('sum ', su);
    console.log('max ', ma);
    console.log('min ', mi);
    console.log('ave ', av);

}

function sum(arg, index)
{
    if(index <= 0)
    {
        if(index < 0)
        {
            return "Dont exist arguments";
        }
        else
            return arg[index];
    }
    else
    {
        return arg[index] + sum(arg, index-1);
    }
}

function max(maxArgument, arguments, index)
{
    if(index <= 0)
    {
        if(index < 0)
        {
            return "Dont exist arguments";
        }
        else
        {
            if (arguments[index] > maxArgument)
            {
                maxArgument = arguments[index]
            }
        }
        return maxArgument;
    }
    else
    {
        if(arguments[index] > maxArgument)
        {
            maxArgument = arguments[index]
        }
        index = index -1;
        return max(maxArgument, arguments, index);
    }
}

function min(minArgument, arguments, index)
{
    if(index <= 0)
    {
        if(index < 0)
        {
            return "Dont exist arguments";
        }
        else
        {
            if (arguments[index] < minArgument)
            {
                minArgument = arguments[index]
            }
        }
        return minArgument;
    }
    else
    {
        if(arguments[index] < minArgument)
        {
            minArgument = arguments[index]
        }
        index = index -1;
        return min(minArgument, arguments, index);
    }
}

function avg(arg, index, qty)
{


    if (index == qty - 1) {
        return arg[index];
    }

    if (index == 0)
        return ((arg[index] + avg(arg, index + 1, qty)) / qty);
    else
        return (arg[index] + avg(arg, index + 1, qty));
}














