//Q1. Create a variable of type string and try to add a number to it
let name1 = "Yamini"
let age = 25
console.log("Her name is "+name1 + " And Age is  "+ age)

//Q2: Use typeof operator to find the datatypes of the string in last question
console.log(typeof (name1+age))

//Q3: create a const object in jS can you change it hold a number later 
const CreatingObje = {
    name2 : "BUBU",
    age2: 25
}
CreatingObje['name2'] = "DUDU"
console.log(CreatingObje)


//Q4:try to add a new key to the const object in probelm 3 where you able to do it
CreatingObje['name2'] = "DUDU AND BUBU"
console.log(CreatingObje)

//Q5: Write a javascript program to creae a word meaning dictonary of 5 words
const dictonary = {
    certainly : "surly",
    however: "but"
}
console.log(dictonary.certainly+","+dictonary.however)
console.log(dictonary['certainly']+","+dictonary['however'])