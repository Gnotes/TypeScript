# interface 与 type

本节完全是复制的，参考： [重难点梳理](https://xiaozhuanlan.com/topic/6703895421)、 [typescript-interfaces-vs-types](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)

`interface` 和 `type` 两个关键字的含义和功能都非常的接近。这里我们罗列下这两个主要的区别

`interface`:

同名的 `interface` 自动聚合，也可以跟同名的 `class` 自动聚合
只能表示 `object、class、function` 类型

`type`:

不仅仅能够表示 `object、class、function`
不能重名（自然不存在同名聚合了），扩展已有的 `type` 需要创建新 `type`
支持复杂的类型操作

### Objects/Functions

都可以用来表示 `Object` 或者 `Function` ，只是语法上有些不同而已

```ts
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}
```

```ts
type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```

### 其他数据类型

与 `interface` 不同，`type` 还可以用来标书其他的类型，比如基本数据类型、元素、并集等

```ts
type Name = string;

type PartialPointX = { x: number };
type PartialPointY = { y: number };

type PartialPoint = PartialPointX | PartialPointY;

type Data = [number, string, boolean];
```

### Extend

都可以被继承，但是语法上会有些不同。另外需要注意的是，**interface 和 type 彼此并不互斥**

#### interface extends interface

```ts
interface PartialPointX {
  x: number;
}
interface Point extends PartialPointX {
  y: number;
}
```

#### type extends type

```ts
type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };
```

#### interface extends type

```ts
type PartialPointX = { x: number };
interface Point extends PartialPointX {
  y: number;
}
```

#### type extends interface

```ts
interface ParticalPointX = {x:number;};
type Point = ParticalPointX & {y:number};
```

#### implements

一个类，可以以完全相同的形式去实现 `interface` 或者 `type`。但是，类和接口都被视为静态蓝图（static blueprints），因此，他们不能实现/继承 联合类型(`并集`，也可以说是 `或 |` 操纵 )的 `type`

```ts
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x: 1;
  y: 2;
}

type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x: 1;
  y: 2;
}

type PartialPoint = { x: number } | { y: number };

// FIXME: can not implement a union type
class SomePartialPoint implements PartialPoint {
  x: 1;
  y: 2;
}
```

#### 声明合并

和 type 不同，`interface` 可以被重复定义，并且会被自动聚合

```ts
interface Point {
  x: number;
}
interface Point {
  y: number;
}

const point: Pint = { x: 1, y: 2 };
```

#### only interface can

在实际开发中，有的时候也会遇到 interface 能够表达，但是 type 做不到的情况：**给函数挂载属性**，也就是函数接口类型中的 **混合类型**

```ts
interface FuncWithAttachment {
  (param: string): boolean;
  someProperty: number;
}

const testFunc: FuncWithAttachment = function(param: string) {
  return param.indexOf("Neal") > -1;
};
const result = testFunc("Nealyang"); // 有类型提醒
testFunc.someProperty = 4;
```

#### & 和 | 操作符

这里我们需要区分，`|` 和 `&` 并非位运算符。我们可以理解为 `&` 表示必须同时满足所有的匹配规则。`|` 表示可以只满足一个规则

```ts
interface IA{
  a:string;
  b:string;
}

type TB{
  b:number;
  c:number [];
}

type TC = TA | TB;// TC 的 key，包含 ab 或者 bc 即可，当然，包含 bac 也可以
type TD = TA & TB;// TD 的 key，必须包含 abc
```

#### 交叉类型

交叉类型，我们可以理解为合并。其实就是 **将多个类型合并为一个类型**

```ts
interface ObjectConstructor {
  assign<T, U>(target: T, source: U): T & U;
}
```

以上是 ts 的源码实现，下面我们再看一个我们日常使用中的例子

```ts
interface A {
  name: string;
  age: number;
  sayName: (name: string) => void;
}

interface B {
  name: string;
  gender: string;
  sayGender: (gender: string) => void;
}

let a: A & B;

// 这是合法的
a.age;
a.sayGender;
```

#### extends

`extends` 即为扩展、继承。在 ts 中，**`extends` 关键字既可以来扩展已有的类型，也可以对类型进行条件限定**。在扩展已有类型时，不可以进行类型冲突的覆盖操作。例如，基类型中键 a 为 `string`，在扩展出的类型中无法将其改为 `number`

```ts
type num = {
  num: number;
};

interface IStrNum extends num {
  str: string;
}

// 与上面等价
type TStrNum = A & {
  str: string;
};
```

在 ts 中，我们还可以通过条件类型进行一些三目操作：`T extends U ? X : Y`

```ts
type IsEqualType<A, B> = A extends B ? (B extends A ? true : false) : false;

type NumberEqualsToString = IsEqualType<number, string>; // false
type NumberEqualsToNumber = IsEqualType<number, number>; // true
```
