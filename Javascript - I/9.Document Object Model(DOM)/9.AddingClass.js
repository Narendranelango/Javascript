var count=document.getElementById("count");
console.log(count.classList)
count.classList.add("technology")//Class technology will be overridden to the count.classList
// console.log(count.classList.add("technology"))
setTimeout(function() {
    count.classList.remove("technology")
},1500)