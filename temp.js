function greet(param){
    if (typeof param === string){
        
    }
}

function func(){
    var priv = "secret code";
    return function(){
        return priv;
    }
}

const findVowels = (str) => {
    let count=0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}

//check type of array:
var arrayList = ['a','b'];
//console.log (Object.prototype.toString.call(arrayList) === '[object Array]');
// console.log(Array.isArray(arrayList));
var getPriv = func;

var k = 1;
if (1) {
    if (function foo() {}){
    k = typeof(foo);
    }
    // k += "hello";
}

// empty an array

var anotherArray = arrayList;
arrayList.length = 0;

// closure
function baseMsg(greeting){
    return function(personName){
        return greeting + ' ' + personName + '!';
    }
}

function outerFunction() {
    var name = "John Doe";
    function innerFunction() {
      console.log(name); // Prints "John Doe"
    }
    return innerFunction;
  }
  
  var innerFunction = outerFunction();
  innerFunction(); // Prints "John Doe"

const sayHello = baseMsg("Hello");
console.log( sayHello("Ralph"));






