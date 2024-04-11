// 타입별칭(Type Aliases)
// 타입에 대한 별칭을 제공하며, 재사용 할 수 있다.
// 주의해야 할 부분은 타입별칭은 정의한 타입을 참고할 수 있게 이름을 지어주는것이지,
// 새로운 타입을 생성하는 것이 아님
// 객체, 함수등에 유용하게 사용

// type 별칭 =  타입;

//타입만 사용
const food: string = "banana";
//이러면 err
// const food: string = 1;

// 타입별칭을 사용
type Food = string;
const myFood: Food = "banana";
//이러면 err
// const myFood2: Foods = 1;

// 타입자리에 원시값 외에 유니온 튜플등
// 인터페이스 레벨의 복잡한 타입이 올 수 o

// 문자열 타입
type Name = string;
const userName: Name = "Jade";

// 문자열리터럴
type MyName = "Jade";
const userName1: MyName = "Jade";

// 숫자 타입
type MyNumber = number;
const myNumber: MyNumber = 1;

// 유니온 타입
type MyText = string | number;

// 문자열 유니온
type YourText = "hello" | "bye";

// 숫자 리터럴 유니온
type MyNumber1 = 1 | 2 | 3 | 4 | 5;

// 객체 리터럴 유니온
type MyObj = { first: 1 } | { second: 2 };

// 함수 유니온
type MyFunction = (() => string) | (() => void);

// 인터페이스 유니온
interface A {
  a: number;
}
interface B {
  b: number;
}

// 튜플타입
type MyTuple = [string, number];

// 제네릭 타입
type MyGenerics<T> = {
  name: T;
};

// 객체 타입
type User = {
  name: string;
  age: number;
};

// 함수의 파라미터
function getUser(user: User) {}
let newUser: User = {
  name: "이녕",
  age: 20,
};

getUser(newUser);

// 함수 타입 if return값 x -> void
type AddNumber = (x: number, y: number) => number;
let addNumber: AddNumber = (x, y) => {
  return x + y;
};
