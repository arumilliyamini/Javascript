//Q1:- Use operatore person age lies between 10 and 20
let Person_age = prompt("Enter your age")
console.log(Person_age>=10 && Person_age<=20?"Your age between 10 to 20":"Your age not between 10 to 20")

//Q2:-Demonstrate the use of switch case in javascript

//Q3:- find number divisible by 2 and 3
let num = prompt("enter number")
num = Number.parseInt(num);
console.log(num % 2 == 0 && num % 3 ==0?"Your number divisible by 2 and 3" : " your number not divisible by 2 and 3")

//Q4: Same Question above but OR operator 

//Q5:-print "you can drive" or " you cannot drive" based on age being greater than 18 using ternary operatoer
console.log(Person_age > 18?"Your acan drive":"Your cannot drive")
