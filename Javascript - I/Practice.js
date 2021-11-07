                                        /*Conditional and Switch Statements*/
//Conditional                                        
if(5>7)
{
    console.log("1")
}
else if(8>3)
{
    console.log("2")
}

else{
    console.log("3")
}

//Switch
var per=80
switch(per){
case 40:
    console.log("Fail")
    break;
case 80:
    console.log("Pass") 
    break;
default:
    console.log("Please enter the correct value")
}


                                /*Operators */

if(4 =='4'){
    console.log(true)
}
else{
    console.log(false)
}

if(4 === '4'){
    console.log(true)
}
else{
    console.log(false)
}

                                /*Type Coercion */
//Implicit
var a='5'
var b="Neren"
var c=a+b
console.log(typeof(c))
console.log(typeof(a+true))
console.log(typeof(2>=a))
console.log(typeof(2>=a))

//Explicit
var a= 54
console.log(typeof(a));
console.log(typeof(String(a)))
console.log(typeof(String(true)))
console.log(typeof(String(null)))
console.log(typeof(String(undefined)))

var n="Narendran"
console.log(typeof(n));
console.log(typeof(Number(n)))
console.log(typeof(Number(true)))
console.log(typeof(Number('54')))
console.log(typeof(Number(5.11)))

console.log(Boolean(0),typeof(Boolean(0)))
console.log(Boolean(1),typeof(Boolean(1)))
console.log(Boolean('Naren'),typeof(Boolean('Naren')))
console.log(Boolean(' '),typeof(Boolean(' ')))