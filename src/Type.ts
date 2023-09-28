let address: string = "인천";
let age: number = 28;

// address = 0; // address를 stirng으로 선언해서 err
// age = "나이"; // age를 number로 선언해서 err

console.log(address);
console.log(age);

let a: any = 0;
// any는 모든 타입의 값을 지정할 수 있음
// but 타입 체크를 확실하게 하기 위해 지양
a = true;
a = "typescript";
a = {};

console.log(a);

// never 타입
// 절대 반환을 하지 않는 함수에 사용
// 도달되지 않는 코드  실행이 종료되지x 무한으로 반복되는 함수 or 오류 발생시키기 위해
const neverTest = () => {
  while (true) {
    console.log("함수가 실행중!!");
  }
};

function sayName(value: string): string {
  if (typeof value === "string") {
    return value;
  } else {
    return value;
  }
}

// 유니온타입
// 하나의 변수에 지정할 수 있는 타입이 여러 개 일떄
// 두 개 이상의 타입을 가지는 변수는 any타입이 아닌 유니온 탕비을 사용하는 것이 관습
// 타입스크립트 컴파일러가 런타임 도중 잘못된 값이 지정될 경우 감지해 오류 바로 해결가능
let x: string | number;

// 커스텀타입
// type을 사용하여 새로운 타입을 선언할 수 있음
// type alias (타입 별칭) 사용해서 이미 존재하는 타입에 다른 이름 붙여 사용 가능
type Centimeter = String;
type Kilogram = number;

// 이렇게 선언해줌
// ?를 사용하면 필수로 안써도됨
type Student = {
  name?: string;
  height: Centimeter;
  weight: Kilogram;
};
let student: Student = {
  // name: "인영",
  height: "167",
  weight: 65,
};
console.log(student);
