const names=["jane","sumit","george","paul"]
console.log(names)
console.log(names[2])
console.log(names.length)
console.log(names[1],names[3])
names.push("a")
console.log(names)
names.pop()
console.log(names)

for(let i=0;i<names.length ;i++){
    console.log(names[i])
}
const fun=()=>{
    console.log('hello')
}
names.forEach(fun)
const fun1=(al)=>{
    console.log('hello',al)
}
names.forEach(fun1)

//key-value pairs for diff details of two or more emp
const emp_1={
    name:'john',
    age:22,
    job:'web-dev',
};
const emp_2={
    name:'steve',
    age:25,
    job:'web-design',
    say_hello:function(){
        console.log("hello iam steve")
    },
    hi_Hello:function(greeting){
        console.log(greeting,"hi hello iam steve")
    }
};
console.log(emp_1)
console.log(emp_1.name, emp_2.name)
emp_2.hi_Hello("namaste")



