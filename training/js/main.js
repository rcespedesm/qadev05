/**
 * Created by rodrigocespedes on 11/5/2015.

var sayHello = function (name, age) {
    if(age > 18)
    {
        console.log(name+" YOU ARE HOLD, YOU ARE "+age+" YEARS HOLD");
    }
    else
    {
        console.log(name+" YOU ARE YOUNG, YOU ARE "+age+" YEARS HOLD");
    }
};


function getAverage(a, b, c)
{
    console.log('Arguments: ', arguments);
    var cant = arguments.length;
    var inc = 0;
    for(var i = 0 ; i < arguments.length ; i++)
    {
        inc = inc + arguments[i];
    }

    if(inc === 0 && cant === 0)
    {
        return "Don't exist Arguments";
    }
    else
    {
        return inc / cant;
    }


}

console.log('Average: ', getAverage(5,1,3));

var getFullName = function (firstName, lastName)
{
    console.log('Arguments: ', arguments);
    return firstName + " " + lastName;
}


console.log('Full Name: ', getFullName('rodrigo','cespedes'));

window.method = function (a, b)
{
    return a + " " + b;
}

window.method('uno', 'dos');



 */
