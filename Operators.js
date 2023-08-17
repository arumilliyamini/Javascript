console.log("Operators in Javascript")
let x1 = 10;
let y1 = 2;
console.log("Addition = ", x1+y1);
console.log("Multiplication =" + x1*y1);
console.log("Substraction =", x1-y1);
console.log("Divide =", x1%y1);
console.log("Divide =", x1/y1);
console.log("Mutliply = ", x1**y1);
console.log(x1++ ,",", ++x1);
console.log(x1 + ",", +x1);
console.log(x1++);
console.log(x1-- ,",", --x1);

//Assignment Operators
let q1 = 3;
let q2 =4;
q1 -= 1;
q2 += 1;
console.log("value of q1 =" + q1)
console.log("value of q1 =" + q2)

//Comparision Operators ==, !=, ===, !==,>,<,<=,>=,?
let comp1 = 6;
let comp2 = 7;
console.log(comp1 == comp2 );
console.log(comp1 != comp2 );
console.log(comp1 === comp2 );
console.log(comp1 !== comp2 );
console.log(comp1 > comp2 );
console.log(comp1 < comp2 );
console.log(comp1 <= comp2 );
console.log(comp1 >= comp2 );

//Logical Operators
console.log(comp1 <= comp2 && comp1>=comp2);//flase
console.log(comp1 & comp2);
console.log(comp1 || comp2);
console.log(comp1 != comp2 || comp1 <= comp2);
console.log(comp1 | comp2);
console.log(comp1 != comp2 | comp1 <= comp2);

//Conditional Statements
if(comp1 == comp2)
{
    console.log("The condition Satisfied!")
}
else
{
    console.log("Condition Not Satiesfied!")
}
//
if(comp1 != comp2)
{
    console.log("The condition Satisfied!")
}
else 
{
    console.log("Condition Not Satiesfied!")
}
//The JavaScript window. prompt() is a built-in function that is used to display a dialog box that asks the user to input some text.
// This pop-up box will appear and takes user input before entering the web page. 
let prompt_ = prompt("Hello Welocome! Please Enter Your Name: ")
console.log(typeof prompt_)
//alert
let alert_ = alert(prompt_)
console.log(typeof alert_)
//ParseInt it convert string to number 
let comp3 = prompt("Hey whats your age?")
paresInt_ = Number.parseInt(comp3);
console.log(paresInt_)
// if(paresInt_>0)
// {alert("its true")} else {alert("This is an invalid age")}

//if(paresInt_ == 6){alert("its true")} else if(comp3<7 | comp3>10) {alert("This is trueee")} else{console.log("both conditions invalid")}
//Using Ternanry operator
console.log(paresInt_ == 3 ? "its true" : "This is flase")
//Swith statement
const expr = 'Banaas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


