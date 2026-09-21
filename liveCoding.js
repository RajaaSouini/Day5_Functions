// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.


function greet(){
  console.log("Hello Everyone !!")
}

/*
function Introduction(name, Age)
{
  console.log(Hello, My Name is ${name}, and I am ${Age} YO)
} */

// Introduction("Yassine",31)
// Introduction("Mohamed",25)

function AddTwoValues(a,b)
{
  return a+b;
}

// console.log(AddTwoValues(2,5))

let sum = AddTwoValues(7,5)

// console.log(sum)


function Div(a,b)
{
  if(b===0)
    return "can't divide by 0"
  return a/b;
}

// console.log(Div(6,2)) // 3

// console.log(Div(2,6)) // 0.xxxx

// console.log(Div(6,0)) // err

function sayMyName(name)
{
  console.log("You are "+name)
}
let result = sayMyName("Yassine")
console.log(result)
