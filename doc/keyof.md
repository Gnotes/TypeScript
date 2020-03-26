# keyof

本节完全是复制的，参考： [重难点梳理](https://xiaozhuanlan.com/topic/6703895421)

`keyof` **是索引类型操作符**。用于获取一个“常量”的类型,这里的“常量”是指任何可以在 **编译期确定的东西**，例如 `const、function、class` 等。

假设 `T` 是一个类型，那么 `keyof T` 产生的类型就是 _T 的属性名称字符串字面量类型构成的联合类型_， 说的这么绕就是，**T 对象或者函数所有共有属性名称 key 的集合**

```ts
type Person = {
  name: string;
  age: number;
  isABoy: boolean;
  marry(): any;
};

type keyofPerson = keyof Person; //结果是： "name" | "age" | "isABoy" | "marry";
```

注意，如果 T 是带有`字符串索引`的类型，那么`keyof T`是 `string`或者`number`类型。 **索引签名参数类型必须为 "string" 或 "number"**

```ts
interface Map<T> {
  [key: string]: T;
}

//T[U]是索引访问操作符;U是一个属性名称。
let keys: keyof Map<number>; //string | number
let value: Map<number>["antzone"]; //number
```

其实是因为 `number` 类型 JS 最终会通过 `string` 类型做转换，参考 **[接口-可索引的类型](./接口.md#可索引的类型)** 部分
