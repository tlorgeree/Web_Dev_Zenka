console.log("this works");
let b = 1;
b++;

console.log("b is: " + b);//Console log allows multiple data types

//Conditional statements
let direction = "left";

if (direction == "left")
{
    console.log("Red Planet");
}
else if (direction == "right")
{
    console.log("Purple Planet")
}
else if (direction == "backward")
{
    console.log("Going home");
}
else console.log("You crashed and died a violent space death");


//Function declaration
function hourToMinutes(hours){
    return hours*60;
}

console.log(hourToMinutes(50));


//Working with DOM
//1. Select

let sign = document.getElementById("sign");
console.log(sign);

//2. Modify
console.log(sign.textContent);
sign.textContent = "Go away!";

sign.innerHTML = sign.innerHTML + "<p>hello</p>";// add html without changing existing

//3. Change style
sign.style.color = "green";



