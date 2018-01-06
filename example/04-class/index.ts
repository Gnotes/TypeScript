interface Person {
  firstName: string;
  lastName: string;
}

class Student implements Person {
  fullName: string;
  constructor(public firstName: string, middleName: string, public lastName: string) {
    this.fullName = `${firstName}.${middleName}.${lastName}`;
  }
}

function greet(p: Person) {
  return `我是：${p.lastName}`;
}

greet(new Student('Xing', 'H', 'he'))
