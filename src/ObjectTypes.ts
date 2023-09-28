// 객체 타입
// JS와는 다르게 객체를 선언할 때 어떤 타입인지 명확하게 정의해야함

// 객체 선언
// 변수 이름 옆에 : 오른쪽에 {} or new를 사용하여 정의
// type을 정해주지 않는다면 자동으료 any 타입으로 지정
const student1: object = {};
const student2 = {}; // any 타입

let objstudent: {
  name?: string;
  // name?: string, 이렇게 하면 필수로 안 써줘도 됨
  grade: number;
};
objstudent = {
  name: "학생",
  grade: 3,
};

// type을 선언하지 않고 유추할 수 도 있음
let objstudent2 = {
  name: "gg",
  grade: 5,
};

// 옵션 속성
// 객체 생성 시 지정하지 않고 나중에 값 추가 가능
const cat: { type: string; age?: number } = {
  type: "Persian",
};
cat.age = 2;
console.log(cat);

// 인덱스 시그니처
// [index:선언되는 변수 형태]:타입
// if [index: number]: string -> indstudent[1] = "230908";
// if [index: string]: number -> indstudent.id = 230908;

const indstudent: { [index: number]: string } = {};

indstudent[1] = "230908";
// indstudent.id = 230908000;
console.log(indstudent);
