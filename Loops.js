//for loop
let value1 = 20;
for(value1=0; value1<=20; value1++)
{
    console.log("Number"+value1)
}
//for in loop
let marks = {
    suba:40,
    hary:50,
    mary:90,
    july:49,
    june:77
}
for(let mark in  marks)
{
    console.log(mark+ " " +    marks[mark])
}

//for off loop
for(let mark1 of "july")
{
    console.log(mark1+ " " +    marks[mark1])
}

//while loop
//do while
//Functions: used for organise our code 
function myFun(a,b){
    return a+b;
    
}
let result = myFun(10,2);
console.log(result)
//Arraow function way of writing 
const greet = (a,b) =>{
    return a+b;
}
let result1 = greet(8 ,2);
console.log(result1)