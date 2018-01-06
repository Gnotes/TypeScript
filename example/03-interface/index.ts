interface Person {
  name: string;
  age: number;
}

function greet(p: Person) {
  return `我是${p.name}，今年${p.age}岁.`;
}

greet({ name: 'xing.he', age: 26 });

export default greet;