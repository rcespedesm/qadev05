/**
 * Created by rodrigocespedes on 11/12/2015.
 */


var Person = function(name){
    this.name = name;
    this.run = function(){
        console.log(this.name, ' is Running...!!');
    }
};

Person.prototype.cry = function(){
    console.log(this.name, ' is Crying...!!');
}