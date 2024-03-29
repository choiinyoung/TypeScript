// 인터페이스

// 타입 별칭과 비슷하게 새로운 타입을 정의하는 또 다른 방법
// 객체 함수 함수의 파라미터, 클래스등에 사용할 수 있음
// interface 이름 { 속성: 타입; }

interface InterUser {
  name: string;
  age: number;
}

let user1: InterUser = {
  name: "인영",
  age: 20,
};

let user2 = {} as InterUser;
user1.name = "안녕";
user1.age = 5;

// 함수타입
interface InterAddNumber {
  (x: number, y: number): number;
}

let addNumber1: InterAddNumber = (x, y) => {
  return x + y;
};

addNumber1(10, 10);

// 옵션속성
interface NewUser {
  name: string;
  age: number;
}

function getAge(obj: NewUser) {
  console.log(obj.name);
  console.log(obj.age);
}

let person = {
  name: "이녕ㅇ",
  age: 3,
};

// getAge(person); 다 안써주면 err
getAge(person);
