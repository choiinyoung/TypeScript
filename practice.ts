// interface Student {
//   name: string;
//   age: number;
//   height: number;
// }

// let array: Student[] = [
//   { name: "kim", age: 17, height: 182 },
//   { name: "lee", age: 39, height: 172 },
//   { name: "park", age: 21, height: 158 },
//   { name: "choi", age: 33, height: 183 },
//   { name: "jung", age: 26, height: 177 },
//   { name: "kang", age: 22, height: 164 },
//   { name: "cho", age: 28, height: 167 },
// ];

// const find = (array): Student => {
//   if (array.age >= 25 && array.height >= 175) return array.name;
// };

// const result: Student = find(array);

// console.log(result);

interface Person {
  name: string;
  age: number;
  height: number;
}

let array: Array<Person> = [
  { name: "kim", age: 17, height: 182 },
  { name: "lee", age: 39, height: 172 },
  { name: "park", age: 21, height: 158 },
  { name: "choi", age: 33, height: 183 },
  { name: "jung", age: 26, height: 177 },
  { name: "kang", age: 22, height: 164 },
  { name: "cho", age: 28, height: 167 },
];

interface Filter {
  (arr: Person[]): Array<string>;
}

const result: Filter = (arr) => {
  let nameArr: string[] = [];

  arr.map((el: Person) => {
    if (el.age >= 25) {
      if (el.height >= 175) nameArr.push(el.name);
    }
  });
  return nameArr;
};
const resultAr: string[] = result(array);
console.log(resultAr);
