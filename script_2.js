const inputval1=document.getElementById("val1");
const inputval2=document.getElementById("val2");
const btn =document.getElementById("add");
btn.addEventListener("click",function(){
    const val1=inputval1.value;
    const val2=inputval2.value;
    const res=document.getElementById("result");
    res.innerText=parseInt(val1)+parseInt(val2);
});