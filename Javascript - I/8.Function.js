console.clear()
//Functions
function mSum(){
    var a=10
    var b=18
    var res=a+b
    return res
    console.log("Won't print since return is before console.log()")
}
mSum()
console.log("Log "+mSum())//Undefined when return stmt. is commented
var fun=10+mSum()
console.log(100+fun)
//Function Arguments
function fun1(n1,n2,n3,n4){
    console.log("N1: "+n1+" N2: "+n2+" N3: "+n3+" N4: "+n4)
    var a=n1+n2
    var b=n3-n4
    console.log("a: "+a+" b:"+b) 
}
    fun1(8,8,7,4)
    fun1(8,8,7)//n4-Undefined

//Scope and Environment
var a=3//Global
function fun2(){
    var b=3//Local
    console.log(a+b)
}
fun2()
//Variable Hoisting
console.log(name)//Undefined
name="Narendran Elango"
console.log(name)
var name;
//Function Hoisting
var aa=10
var funct=function(a,b){
    aa=5
    console.log(aa)//takes local variable hoisted i.e, aa=5
    console.log(a+b)
    var aa;
}
funct(11,10);