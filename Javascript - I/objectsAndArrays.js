// console.clear()
var car={
    brand:"Volkswagen",
    model:"Polo",
    color:"Red",
    CC:1000,
    price:"7 Lakhs",
    owner:{
        name:"Narendran Elango",
        age:24,
        occupation:"Software Developer",
        liscence_no:"xxxxxxxx",
    },
};

var bike={
    brand:"Yamaha",
    model:"MT15",
    color:"Black",
    CC:150,
    price:"1.6 Lakhs",
    fun:function(){
        console.log("Inside Bike!")
        setTimeout(function(){
            console.log("Bike Stopped");
        },500)
    }
};
console.log("Brand: "+car.brand+" Model:"+car.model)
console.log(car.owner)
console.log(bike.fun())