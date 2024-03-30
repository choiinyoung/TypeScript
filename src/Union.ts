// 유니온 타입
// 하나의 값이 여러개의 타입을 가지는 경우
// or연산자처럼 'A이거나 B'

// 타입지정
let text: string | number = 22;
console.log(text);

text = "ㅎㅎ";
console.log(text);

// 인터페이스 유니온
// 인터페이스를 연결했을 때 모든 타입의 공통 속성에만 접근 가능
// 매개변수의 타입이 name, age, character를 모두 사용할 수 있을거 같지만 x
// 함수를 호출할 때 어떤 타입이 올지 알수 없기 때문에 어떤 타입이 들어오든
// 오류가 안나는 방향으로 타입추론 -> 이떄 유니온 타입가드을 사용
interface Ujin {
  name: string;
  age: number;
}

interface Inyoung {
  name: string;
  character: string;
}

function combine(person: Ujin | Inyoung) {
  person.name;
  // person.age;
  // person.character; -> err
}

// 유니온 타입가드
// 유니온타입으로 선언한 변수나 객체를 사용해야 할 경우
// 그대로 사용하면 오류가 날 수 있음
//   -> 런타임 타입 검사를 추가하여 타입이 어느 쪽에 해당하는지 판정해줘야함
function combine2(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 == "number" && typeof input2 == "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
console.log(combine2("hello", "world"));

// class Ujin {
//   jjeu_jjeu() {
//   }
// }
// class Inyoung {
//   bong_gug() {
//   }
// }

// const combine3 (user: Ujin | Inyoung) {
//   if (user instanceof Ujin) {
//     user.jjeu_jjeu()
//   } else {
//     user.bong_gug()
//   }
// }

// 일반 객체 식별
// 객체 타입을 지정할 때 인터페이스를 사용하여 모양 지정
// if문에서 pet타입을 체크했지만 내부에 as를 사용해 한번 더 체크
interface Cat {
  meow(): string;
}

interface Dog {
  bowwow(): string;
}

function checkType(pet: Cat | Dog) {
  if ("meow" in pet) {
    (pet as Cat).meow();
  } else {
    (pet as Dog).bowwow();
  }
}
