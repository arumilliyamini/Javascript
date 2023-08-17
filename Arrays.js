let arr1 = [12,34,25,65,null,"Arrays",false]
console.log(arr1)
console.log(arr1.length)
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7])//undefined bcz 7 index not exist 
console.log("Tha Array values",arr1.length)
arr1[7] = 22 //adding new value to array
arr1[6] =34 // changing the value
console.log(arr1)
console.log(typeof arr1)

//Array Methods-->
let num = [1,2,3,4,5,6]
let num2 = ["One","Two","Three"]
let b = num.toString();// b is now string
console.log(typeof b)
let c = num.join(",")// join method
console.log(c, typeof c)
console.log(num, num.pop()) //retursn the pope elements
console.log(num, num.push(23)) //push method increase the length
console.log(num, num.shift()) //shift method
console.log(num, num.unshift(21)) //unshift we can add new elemnt at removed place
console.log(num, delete num[1]) //delete method
console.log(num, num.concat(num2)) //concat method
console.log(num.sort()) //sort mrthod
num.splice(2,1,90,80)
console.log(num)
let x = num.slice(3,7)
console.log(x)

//Loops
for (let i=0; i<num.length; i++)
{
    console.log(num[i])
}
num.forEach((ele) =>
{
    console.log(ele+ele);
})

let name_ = "YAmini"
let array1 = Array.from(name_)
console.log(array1)
console.log(typeof array1)

for(let i of num)
{ console.log(i) }

for(let i in num)
{ console.log(i) }

//Map
let num_ = [7,8,9]
num_.map((value)=>
{
    console.log(value)
})
console.log(num_)
