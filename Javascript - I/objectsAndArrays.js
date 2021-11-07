console.clear()
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


//Arrays-I
var mFriends=["Viki","Manish","Pranav","Aakash"]
console.log(mFriends)
console.log(typeof(mFriends))
console.log(mFriends[0])
console.log(mFriends[3])
mFriends[3]="JP"
console.log(mFriends[3])
mFriends.push("Senthil", "Narayanan")
console.log(mFriends)
mFriends.pop(mFriends)
console.log(mFriends)


//Arrays-II
//To add

//first parameter - Tells where to start.
//second parameter - How many items to be deleted.
//third parameter - What to add.
mFriends.splice(1,0,'Maneesh','Jai Prakash')
console.log(mFriends)

//To delete
mFriends.splice(1,1)
console.log(mFriends)

var schoolFriends=["Dinesh","Chandrasekar","Ajith","Mohan","Bharath"]
var friends=schoolFriends.concat(mFriends)
console.log(friends)
console.log(friends.sort())
console.log(friends.reverse())
