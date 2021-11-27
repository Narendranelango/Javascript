var countVal=document.getElementById("count")
var initialVal=countVal.innerHTML;
setInterval(() => {
    if(initialVal>0){
    initialVal -=1
    countVal.innerHTML=initialVal}
}, 1000);

// var countVal=document.getElementById("count1")
// var initialVal=countVal.innerHTML;
// setInterval(() => {
//     initialVal >0 ?
//     initialVal -=1 :0
//     countVal.innerHTML=initialVal}
// , 100);