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
