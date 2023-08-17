//Q1:- Write a program to print the marks of student in an object using for oop
//obj = {harry:90, vshal:87,jiya:67}

let obj = {harry:90, vshal:87,jiya:67}

for(let i=0;i<Object.keys(obj).length;i++)
{
    console.log(Object.keys(obj)[i] + " " + obj[Object.keys(obj)[i]])
}

//Q2: above question same use in operator

for(let i in obj)
{
    console.log(i + " " + obj[i])
}

//Q3:write a program to print try again until the user enter correct number
let cn = 4;
let i 
while(i != cn)
{
    i = prompt("ENter correct number")
    console.log("try again")
}
console.log("You have entered ocrrect number")

//Q4:write a function find mean of 5 meme=bers
const mean = (a,b) =>
{
    return (a+b)/2
}
console.log(mean(3+10))