var countVal=document.getElementById("count")//To get tree structure
var initialVal=countVal.innerHTML;//To display Value
setInterval(() => {
    if(initialVal>0){
    initialVal -=1
    countVal.innerHTML=initialVal//Setting the id to value
    countVal.style.fontSize=initialVal*100+50+"px"//Style applied to tree structure
    console.log(countVal.style.fontSize)
}
}, 1000);

// var countVal=document.getElementById("count1")
// var initialVal=countVal.innerHTML;
// setInterval(() => {
//     initialVal >0 ?
//     initialVal -=1 :0
//     countVal.innerHTML=initialVal}
// , 100);