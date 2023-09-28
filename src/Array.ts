// // number arr
// let list: number[] = [1, 2, 3, 4, 5];
// // string arr
// let member: string[] = ["gg", "ss", "인용"];
// console.log(member); // [ 'gg', 'ss', '인용' ]
// member.push("ㅎㄷ");
// console.log(member); // [ 'gg', 'ss', '인용', 'ㅎㄷ' ]

// // any arr
// // 요소 관계없이 배열의 요소를 추가할 수 있지만 타입이 명확하지 않음

// let memberany: any[] = ["이뇽", 10, true, null];

// // union arr
// // 타입을 제약하기 위해 유니온 타입 이용 권장
// let memberunion: (string | number | boolean | null)[] = [
//   "이뇽",
//   10,
//   true,
//   null,
// ];

// // 제네릭배열
// // 타입을 설정해서 사용할 수 있게끔
// // 커스텀타입과 비슷
// let str: Array<string | number> = ["이뇽", 10]; // 유니온타입
// let str2: typeof str = ["ㅎㅎ"]; // 타입쿼리 타입 참조
// console.log(str);
// console.log("str2", str2);

// // 익명함수로도 받을 수 있음
// let arr1: Array<() => string> = [() => "이뇽", () => "ㅎㅎ"];
// console.log(arr1[0]()); // 이뇽
// // 전체 다 출력하려면 반복문, map을 사용하는 방법이있음
// for (const fn of arr1) {
//   console.log(fn());
// }

//Tuple
// 배열은 요소의 개수에 제한 x
// 튜플은 n개의 요소에 대응하는 타입
// if 하나라도 없으면 err
let member: [string, number] = ["이뇽", 10];
console.log(member);
