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

// Rest 문법이 적용된 매개변수
// 전개문법으로 받은 매개변수는 배열이기 때문에 타입을 배열로 받음
function sum4(...numbers: number[]): number {
  return numbers.reduce((result, number) => result + number, 0);
}

console.log(sum4(10, 20, 30)); // 60
console.log(sum4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

// this
// this의 타입을 정할 떄는 함수의 첫 번째 매개변수 자리애 this를 쓰고 타입입력
// 매개변수와 같이 this의 타입을 적어주지만 실제로 인자값을 받는 매개변수는 this:타입을 제외한 나머지임
interface Userf {
  name: string;
  age: number;
  init(this: Userf): () => {};
}

let userf: Userf = {
  name: "inyoung",
  age: 20,
  init: function (this: Userf) {
    return () => {
      return this.age;
    };
  },
};

let getAgef = userf.init();
let agef = getAgef();
console.log(agef); // 20

// 콜백에서의 this
// 콜백 함수에서 this는 콜백으로 함수가 전달 되었을 때 this를 구분해야함

// interface BrowserEL {
//   addClickListener(onclick: (this: void, e: Event) => void): void;
// }

// class Handeler {
//   info: string;
//   onClick(this: void, e: Event) {
//     // BrowserEL의 this타입은 void인데 Handelr라고 타입선언하면 err
//     console.log("clicked!");
//   }
// }

// let handelr = new Handeler();
// browserEL.addClickListener(handelr.onClick);
