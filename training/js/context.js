/**
 * Created by rodrigocespedes on 11/11/2015.
 */

//var age = 'hola';

function getAge(bornYear)
{
    age = 2015 - bornYear;
    return age;
}


function evaluate(a, b, c)
{
    console.log('Arguments: ', arguments);
    var can = arguments.length;
    var inc = 0;

    var s = sum(arguments, arguments.length-1);

    console.log('sum ', s );
    /*console.log('max ', );
    console.log('min ', );
    console.log('ave ', );
    */
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

//console.log('Age: ', getAge(25));