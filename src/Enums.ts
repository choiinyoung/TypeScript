// 열거형
// 비슷한 종류의 아이템들을 함께 묶어서 표현할 수 있는 수단
// 숫자 문자열 값 집합에 이름을 부여할 수 있는 타입

// 첫 문자는 대문자   키의 첫 문자도 대문자로 표시하는 것을 권장
enum Class {
  Rock, //0
  Scissors, //1
  Papper, //2
}

// 숫자 열거형
// 자동으로 열거형의 각 멤버에 숫자를 추론해 할당하지만,
// 값을 명시적으로 설정 할 수 있음
// 상수를 선언만 한다면 숫자 열거형으로 인식해 타입스크립트에서
// 자동으로 각 멤버에 적절한 숫자를 추론해 할당
enum Class1 {
  Rock = 0, //0
  Scissors = 100 + 1, //101
  Papper, //102
}

//문자열 열거형
// 상수를 초기화해주어야함
// 숫자 열거형처럼 값이 증가하진 않지만 값을 읽기 쉬움
enum Game {
  Rock = "ROCK",
  Scissors = "SCISSORS",
  Papper = "PAPER",
}

// 이종 열거형
enum Game1 {
  Rock = "ROCK",
  Scissors = 2,
  Papper,
}

// const enums
// 문자열 리터럴로만 값을 지정할 수 있으며
// 숫자 열거형은 안전성을 해침
// -> 값이나 키로 열거형에 접근할 때 존재하지 않는 키에도 접근할 수 있어서
// 이를 해결하기위해 const enum을 사용하는 것이 좋음
const enum Game3 {
  Rock,
  Scissors,
  Papper,
}
