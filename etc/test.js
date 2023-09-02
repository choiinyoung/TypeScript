let numOne = 1;
let numTwo = 2;

function add(num1, num2) {
  console.log(num1 + num2);
}

add(numOne, numTwo); //3
add(1, 2); //3

add(); //NaN
add(1); //NaN
add(3, "4"); //34
add(5, 6, 7); //11
add("Hello", "world"); //Helloworld
add("Hello,"); //Hello,undefined
