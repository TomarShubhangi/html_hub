console.log("function");
function def(){
    const a=10;const b=20;
    console.log(a+b);console.log("function");
}
function abc(a,b){
    console.log(a+b);console.log("function");
}
def()
abc(10,40)

function sum(a,b,c){
    const result=a+b+c
    return result
}
const res= sum(1,2,3);
console.log(res)

function check_age(age){
    if(age>=18){
        console.log("ADULT")
    }
    else{
        console.log("not ADULT")
    }
}
check_age(20)
check_age(10)






















