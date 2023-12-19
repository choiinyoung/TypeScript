// 타입별칭(Type Aliases)
// 타입에 대한 별칭을 제공하며, 재사용 할 수 있다.
// 주의해야 할 부분은 타입별칭은 정의한 타입을 참고할 수 있게 이름을 지어주는것이지,
// 새로운 타입을 생성하는 것이 아님

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
