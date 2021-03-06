console.clear();
const name="naren" 
let name1="naren"
console.log(name)



name2="narendran"
console.log(name2)
var name2;  //post initialization can only be done in var and not in let and const.



const func=()=>{
    return `${name} ${name2}`  //The dollar represents the template string
}
const res='Hello '+func(name,name2)
// const res1='Hello ${func(name,name2)}`;  //Used for the function func(){ return() }
console.log(res)


                         /* Template Literals*/

// Without template literal   
console.log('Without template literal \n multiline string');   
    
// With template literal   
console.log(`Using template literal  
multiline string`);


                        /* REST OPERATOR*/

const mSum=(num1,num2,...args)=>{ // ...args i.e the rest operator should always be in the last
    console.log(num1)
    console.log(num2)
    console.log(args)
    let d=0
    for(let i=0;i<args.length;i++){
        d=d+args[i]
    }
    console.log(d)
}

mSum(1,2,3,4,5,6,7,8)


                        /* Spread Operator */

let a1=[1,2,3,4,5]
let a2=[6,7,8]
let a3=[...a2]  //if it's given as ... then it won't get updated
a2.push(9)
console.log(a1+" | "+a2+" | "+a3)


const o1={
    namem:"Narendran E",
    agem: 22,
    Degreem:"CSE"
}

const o2={
    namew: "anyname",
    agew: 21,
    Degreew :"Related to comuter Science"
}

let o3={...o1,...o2}
console.log(o3)
console.log(o1.namem+" "+o2.namew)



                    /* Destructuring*/
//It is used to unpack a bunch of variables

const myarr='Martin Luther King'
const s=myarr.split(' ')
console.log(s)
let[a, ,b]=s;
console.log(a+" "+b)
console.log(a)
console.log(b)


const oo1={
    Movie:"I",
    Director:"Shankar",
    Hero:"Vikram"
}

let{Movie,Hero}=oo1
console.log(Movie)
console.log(Hero)



                    /*Map */

let myaar=[1,1,1,1,1]
// const earr=[]//Empty array
const earr=myaar.map((value,key)=>{
    console.log(`Value ${value} Pos ${key}`)
    return value*2
});

console.log(myarr)
console.log(earr)

const naren_Array = myaar.map((val,pos)=>{
    pos+=1
    console.log(`Val ${val} Pos ${pos}`)
    return val
})

console.log(naren_Array)

/**Reduce */


let marr=[{
    Place:"Chennai",
    Work:"IT"
},{
    Place:"Bangalore",
    Work:"IT"
}]

const result=marr.reduce((accum,val)=>{
    console.log(val)
    console.log("___")
    console.log(val.Place)
    console.log("___")
    
    return (accum+1)+(val.Work)
},10)
console.log(result)

let NArray = [{
    Name : "Narendran Elango",
    Profession : "Software Developer"
},{
    Name : "Anush Elango",
    Profession : "Software Developer"
}]

const NReduce = NArray.reduce((acum,v)=>{
    console.log(v)
    return `${acum} ${v.Name}`
},0)

console.log(NReduce)
                                                /** Filter*/



const arrays=[1,2,31,14,15]
const resarr=arrays.filter((item)=>{
    return arrays[item] > 3 //To find the position of number greater than 3 
})
console.log(resarr)

constNresarr = arrays.filter(nos => nos > 3) //To find the number of elements greater than 3
console.log(constNresarr)


/**Find and Find Index */



const r=arrays.findIndex(item=>{
    return item === 14
})
console.log(r)



/**Introduction To Classes */
class Details{
    constructor(name,age,docc,experience){
        this.name=name
        this.age=age
        this.docc=docc
        this.experience=experience
    }
    empDetails=()=>{
        return `Name:${this.name} Age:${this.age} Graduated:${this.docc} Experience:${this.experience}`
    }
}

var o=new Details("Narendran E",22,21,5)
console.log(o.empDetails())    //if functional brac not given then rhole thing printed as string



/**Inheritance */

class Detail extends Details{
    constructor(name,age,docc,experience,experiences,type,liscense){
        super(name,age,docc,experience);
        this.experiences=experiences;
        this.type=type;
        this.liscense=liscense;
    }

    holo=()=>{
        console.log(`Experienced ${this.experiences} Type ${this.type} Liscense: ${this.liscense}`)
    }
        
}
var ob=new Detail("Narendran E",22,21,5,56,"Holywood","TN0005")
// var obb=new Details("Narendran_E",22,21,5)
console.log(ob.empDetails())
ob.holo()



/**Callback and Promises */

// Callback
const id=1
$.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
    console.log(data);
    $.get(`https://jsonplaceholder.typicode.com/posts/${id}`,(data)=>{
        console.log(data)
    }).fail(err=>{
        console.log('Error')
    })
}).fail(err=>{
    console.log('Error')
})


const promiseList=new Promise((resolve,reject)=>{
    console.log("SENDING LIST CALL")
    $.get("http://jsonplaceholder.typicode.com/posts",(data)=>{
     resolve(data);
        }).fail(err=>{
            reject(new Error(`Request One  Failed with status ${err.status}`));
        })
})

const promiseDetails=(data)=>new Promise((resolve,reject)=>{
    console.log("SENDING DETAILS CALL")
    $.get(`http://jsonplaceholder.typicode.com/posts/${data[0].id}`,(data)=>{
      resolve(data);
        }).fail(err=>{
            reject(new Error(`Request  Two Failed with status ${err.status}`));
        })
})

promiseList//Prioritizing to get promiseList first and then promoseDetails next
.then(promiseDetails) //Two promise got chained and generating a single Response (or) Error.
.then((response)=>{
    console.log("Then response =>",response)
})
.catch((error)=>{
    console.log("Call Failed")
    console.log("Catch Error =>",error)
})





 