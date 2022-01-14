var uname=document.getElementById("uname")
var submit_btn = document.getElementById("login-form")
console.log(uname)
//To check whether the value has been changed
uname.addEventListener("change",function(){
    console.log("Value Changed!")
})
//To check the Target DOM
uname.addEventListener("change",function(ob){
    console.log(ob.target)
})
//TO get the input value one by one
uname.addEventListener('input',function(ob){
    console.log(ob.target.value)
})
//To UpperCase
uname.addEventListener("input",function(event){
    var current_value = event.target.value
    current_value=current_value.toUpperCase()
    console.log(current_value)
    uname.value=current_value//Even though caps-lock is off, it will fetch the current input as Upper Case.
})

uname.addEventListener("focus",function(){
    console.log("Element Focused")
})

uname.addEventListener("blur",function(){
    console.log("Element lost Focus")
})

submit_btn.addEventListener("submit",function(){
    alert("Value Submitted")
})


