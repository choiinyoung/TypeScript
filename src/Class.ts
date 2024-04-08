// 클래스의 프로퍼티, 메서드, 매개변수 선언 시: 타입 형태의
// 타입주석을 표기함으로써 타입을 명서

// class Calendar {
//   month: string;
//   constructor(month: string) {
//     this.month = month;
//   }

//   getMonth(): string {
//     return this.month;
//   }
// }

// const calndar = new Calendar("May");
// console.log(calndar.getMonth());

// 클래스 내에서 사용할 프로퍼티를 먼저 정의 및 선언하고 타입을 표기하는 방법
// 생성자 함수를 통해 초기화가 되는 프로퍼티의 경우, 초기화되기 전에 프로퍼티 정의가 꼭 필요 -> 없으면 err

// ts
class Calendar {
  month1: string;
  //  -> 생성자 함수로 초기화 되는 속성은 미리 정의햐아함 안그러면 err
  month2: string = "Jun";

  constructor(month: string) {
    this.month1 = month;
  }
}

const calendar = new Calendar("May");
console.log(calendar.month1); // May
console.log(calendar.month2); // Jun

// js
// class Calendar {
//   month; 있어도 되고 없어도 됨

//   constructor(month) {
//     this.month = month;
//   }
// }

// const calendar = new Calendar("May")
// console.log(calendar.month); // May

// 생성자 매개변수를 이용한 프로퍼티 선언 방법
// 생성자 함수를 통해 초기화되는 프로퍼티의 경우 매개변수를 통해 선언하는 방법
// 프로퍼티 앞에 접근제한자 or readonly를 표기해야 선언 가능

class Calendar2 {
  constructor(private readonly month: string) {}

  getMonth(): string {
    return this.month;
  }
}

// 접근제한자
// public 클래스 내부/외부 어디에서나 모두 접근 가능 default값
// private 해당 클래스 내부에서만 접근
// protected 해당 클래스 내부와 상속받은 클래스 내부에서만 접근

class Calendar3 {
  private month: string;

  public constructor(month: string) {
    this.month = month;
  }
  private getMonth(): string {
    // console.log(calendar3.getMonth());
    return this.month;
  }
}

const calendar3 = new Calendar3("April");
// console.log(calendar3.getMonth()); getMonth()가 private여서 err

// readonly 읽기 전용
// 프로퍼티 이름 앞에 표기함으로써 값을 변경하지 못하도록 읽기 전용으로 설정
// 의도치 않게 값이 변경됐을 때 발생할 수 있는 오류를 방지

class Calendar4 {
  private readonly month: string;

  public constructor(month: string) {
    this.month = month;
  }

  private getMonth(): string {
    return this.month;
  }
}

const calendar4 = new Calendar4("May");
// console.log(calendar4.month); err
// calendar.month = "Jun" err
