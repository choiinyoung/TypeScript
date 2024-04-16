// js에서는 함수에 매개변수를 적고 인자를 넘겨주지 않으면 undefined 리턴
// ts는 err 발생 -> 매개변수를 선언하면 '필수적으로 인자를 입력해야한다'는 의미
// *필수값 ? 함수의 매개변수를 선언하면 null or undefined라도 인자로 넣어야함

// js
// function sum(number1, number2) {
//   return number1 + number2;
//   console.log(number1 + number2);
// }

// console.log(sum(10,20)) //30
// console.log(sum(10,20,30))  //30
// console.log(sum(10)); //NAN

// ts - 반환 값이 있는 경우 *:타입*
function sum(number1: number, number2: number): number {
  return number1 + number2;
}
console.log(sum(10, 20)); //30
// console.log(sum(10,20,30))  // 파라미터개수 많아서 err
// console.log(sum(10)); // 파라미터개수 적어서 err

function inChildern(age: number): boolean {
  return age < 19;
}
console.log(inChildern(30)); // false
console.log(inChildern(10)); // true

// 반환값이 없는 경우 *void*
function sum2(number1: number, number2: number): void {
  console.log(number1 + number2);
}

// 선택적 매개변수 '?'
// 매개변수만큼 인자를 넘기지 않아도 됨

// js
// function morning(name) {
//   return `Good morning ${name || "everyone"}`;
// }
// console.log(morning()); // Good morning everyone
// console.log(morning("mjo")); // Good morning mjo
// console.log(morning(123)); // Good morning 123

// ts *~?:타입*
function morning(name?: string): string {
  return `Good morning ${name || "everyone"}`;
}
console.log(morning()); // Good morning everyone
console.log(morning("mjo")); // Good morning mjo
// console.log(morning(123)); // type err

// 선택적 매개변수가 필수 매개변수보다 앞에 위치하면 err 발생
// if err 없이 매개변수 앞에 위치하고 싶으면 ?제거하고 |undefined선언
function morning2(name: string | undefined, time: number): string {
  return `Good morning ${name || "everyone"},Time is ${time || 8}`;
}
// console.log(morning2()); // err
console.log(morning2("mjo", 7)); // Good morning mjo Time is 7
console.log(morning2(undefined, 123)); //  Good morning everyone Time is 123

// 매개변수 초기화
function sum3(a: number, b = 2024): number {
  return a + b;
}
console.log(sum3(10, undefined)); // 2032
// console.log(sum3(10, 20, 30)); // err
console.log(sum3(10)); // 2032
