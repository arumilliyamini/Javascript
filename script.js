// let hellobtn = document.querySelector('button');
// hellobtn.addEventListener('click',showMsg)

// function showMsg(){
//     alert("Hello World!!");
// }

let hellobtn = document.querySelector('button');
hellobtn.addEventListener('click',inputMsg)

function inputMsg(){
    let name  = prompt('Enter Name of student');
    hellobtn.textContent = 'Roll No.1:' + name;
}
console.log("Adding 3 numbers")

function addThreenumbers(a,s,d){
    return a+s+d;
}

let x = addThreenumbers(1,2,3)
console.log(x)