var stu_Det = {
    name : "Naren",
    age  : 22,
    edu  : "Bachelor Of Computer Science And Engineering",
    per  : 74,
    getEdu : function() {
        return this.edu
    }
}
stu_Det.edu
stu_Det.getEdu()

// Use of this keyword
var edu="BE CSE"
var stu_Det = {
    name : "Naren",
    age  : 22,
    edu  : "Bachelor Of Computer Science And Engineering",
    per  : 74,
    getEdu : function() {
        console.log(this.edu)//Points to stu_edu property.
        console.log(edu)//points to global var edu.
    }
}
stu_Det.getEdu()

//Constructor
var emp={
    empName : "Narendran Elango",
    empID : "11314064",
    Designation : "Senior Software Engineer",
    Role : "Software Developer" 
}
    function Employee(name,eid,des,role){
        this.empName=name
        this.empID=eid
        this.Designation=des
        this.Role=role
    }

    var naren=new Employee("Naren","12","SSE","AD")
    var viki=new Employee("viki","13","SSE","AD")
    console.log(naren)
    console.log(viki)

            /*Prototype */

var restaurant = {//Should meke sure that this "restaurant" is in lowercase. Or else this will get confused with the "Restaurant" Constructor.
    name : "SS Hyderabad",
    place : "Chennai",
    food_Catagories : "Veg/Non-Veg",
    offer : "Unlimited for first day"
}

function Restaurant(Rname, Rplace, Rfood_Catagories, RNoOfPersons){
    this.name=Rname;
    this.place=Rplace;
    this.food_Catagories= Rfood_Catagories;
    this.noOfPerson = RNoOfPersons
}

Restaurant.prototype.calculatePrice = function() {
    if(this.food_Catagories === "Veg"){
      console.log("Total Amount : "+550 *this.noOfPerson)
        }
    else if(this.food_Catagories === "Non-Veg"){
        console.log("Total Amount : "+950 *this.noOfPerson)
        }
    }

var restaurant =new Restaurant("Arabian Nights", "Chennai", "Veg",2)
console.log(restaurant)
restaurant.calculatePrice()