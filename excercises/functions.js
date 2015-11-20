/**
 * Created by rodrigocespedes on 11/19/2015.
 */

    /*Normal Function*/
var sayHello = function(){
    console.log("Hello World..!!");
}

sayHello();

/*anonymous Function // auto-executable*/

/* auto-executables functions is based on anonymous Function */

(function(){
    console.log("Hello World..!!");
})();

(function(name){
    console.log("Hello World..!!" + name);
})();



