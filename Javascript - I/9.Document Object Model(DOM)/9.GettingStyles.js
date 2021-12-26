var count=document.getElementById("count");
var fetchStyle=window.getComputedStyle(count).fontSize
console.log(fetchStyle)
var fetchStyleSubStr=fetchStyle.substr(0,fetchStyle.length - 2)
var modifiedStyle=parseInt(fetchStyleSubStr+100+'px')
console.log(modifiedStyle)