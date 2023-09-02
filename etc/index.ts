// ts는 다른 파일에도 같은 변수가 있으면 에러가 뜸
// 형태를 숫자로 정해줬을 때 이상하면 자체적으로 에러가 떠 실행이 안됨

let numOne: number = 1;
let numTwo: number = 2;

function add(num1: number, num2: number): number {
  console.log(num1 + num2);
  return num1 + num2;
}
add(numOne, numTwo);
// Tuple 써보기
let tuple: [string, number, boolean, object] = [
  "young",
  25,
  true,
  { name: "youngg" },
];

// Enum 써보기
