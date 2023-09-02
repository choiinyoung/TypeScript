// let youngName: string = "young";
// let numArr: number[] = [1, 2, 3, 4];
// let strArr: Array<string> = ["월", "화", "수"];
// let comObj: object = {};
// let youngObj: { name: string; age: number; hobbies: string[] } = {
//   name: "young",
//   age: 25,
//   hobbies: ["sleep", "youtube"],
// };

// // null,undefined
// let nullData: null = null;
// let undefinedData: undefined = undefined;

// // Tuple
// let tupleOne: [number, string, object] = [1, "young", { isMember: false }];

// // Enum
// enum MemberGrade {
//   guest = 0,
//   user = 1,
//   member = 2,
//   admin = 3,
// }

// let userGrade: number = 1;

// if (userGrade !== 3) {
//   console.log("관리자가 아님");
// }

// if (userGrade !== MemberGrade.admin) {
//   console.log("관리자가 아님");
// }

// // Union
// let unionType: number | string | number[] = 1;
// let gender: "M" | "F" = "M";

// // 함수 타입 설정
// function add1(num1: number, num2: number): number {
//   return num1 + num2;
// }

// const add2 = function (num1: number, num2: number): number {
//   return num1 + num2;
// };

// const add3 = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// // void  타입 함수
// function userConsole(str: string): void {
//   console.log(str);
// }
// const userConsole2 = function (str: String): void {
//   console.log(str);
// };
// const userConsole3 = (str: string): void => {
//   console.log(str);
// };

// // never 타입 함수
// function occurError(err: string): never {
//   throw new Error(err);
// }
// function infinite(): never {
//   while (true) console.log("무한");
// }

// // Type 사용하기
// type numOrStr = string | number;
// let dontKnow: numOrStr = 1;
// type grade = "A" | "B" | "C" | "D" | "F";
// let studentGrade: grade = "A";
// let studentsGradeArr: grade[] = ["A", "F", "C"];

// // Interface 사용하기
// interface User {
//   name: string;
//   id: string;
//   age: number;
//   isMenber?: boolean;
//   [additional: number]: string;
// }

// let youngInfo: User = {
//   name: "young",
//   id: "d",
//   age: 25,
//   isMenber: true,
// };

// youngInfo[1] = "A";

// let userData: User[] = [
//   { name: "lee", id: "faker", age: 25, isMenber: false },
//   { name: "rye", id: "keria", age: 20 },
// ];

// // 함수에 interface 적용하기
// interface Add {
//   (num1: number, num2: number): number;
// }

// const interfaceAdd: Add = (x, y) => {
//   return x + y;
// };

// const interfaceAdd2: Add = function (x, y) {
//   return x + y;
// };

// const sumResult: number = interfaceAdd(1, 3);
// console.log(sumResult);
