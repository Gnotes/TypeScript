# TypeScript

## 安装

```bash
npm install -g typescript
```

## 编译

```bash
# 指定文件
tsc the_target_ts_file.ts
# 或者
# 不指定文件，直接使用 tsc 会查找项目根目录的 tsconfig.json
tsc
```

> 查看已全局安装的 npm 包: `npm ls -g --depth 0`

## 配置项 [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

通过 `tsc` 命令行自动生成配置文件

```bash
tsc --init
```

> VSCode [实时编译](./doc/实时编译.md)

## 目录

- [数据类型](./doc/数据类型.md)
- [变量声明](./doc/变量声明.md)
- [函数](./doc/函数.md)
- [类](./doc/类.md)
- [接口](./doc/接口.md)
- [泛型](./doc/泛型.md)
- [模块](./doc/模块.md)
- [装饰器](./doc/装饰器.md)
- [interface 与 type](./doc/interfaces-vs-types.md)
- [keyof 操作符](./doc/keyof.md)
- [重难点梳理](https://xiaozhuanlan.com/topic/6703895421)
- [实时编译](./doc/实时编译.md)
- [tsc 编译参数选项](https://www.tslang.cn/docs/handbook/compiler-options.html)

## 参考文档

- [新手示例](https://www.tslang.cn/samples/index.html)
- [TypeScript](https://www.tslang.cn/index.html)
- [2020-web 前端-TypeScript 完全解读 视频](https://www.bilibili.com/video/BV1Qv411C7ZD) 👍
- [TypeScript 入门教程](https://ts.xcatliu.com)
- [TypeScript](http://cw.hubwiz.com/card/c/55b724ab3ad79a1b05dcc26c/1/1/1/)
- [ptbird | Typescript](http://www.ptbird.cn/category/typescript/)
- [Typescript 视频](https://www.bilibili.com/video/av38379328/?p=1)
- [Typescript 视频](https://www.imooc.com/learn/763)
- [Typescript 声明文件查找仓库 | 已废弃](https://github.com/typings/typings)
- [Typescript 声明文件查找仓库](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [Typescript React 示例](https://github.com/Lemoncode/react-typescript-samples)
- [React-typescript-cheatsheet-cn](https://github.com/fi3ework/blog/tree/master/react-typescript-cheatsheet-cn)
- [TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter)
- [Typescript Example](https://github.com/Jiasm/typescript-example)
- [TSlint - Rules](https://palantir.github.io/tslint/rules/)
- [TSlint-react](https://github.com/palantir/tslint-react)
- [Interface or Type alias](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
- [TypeScript 在 React 中使用总结](https://blog.csdn.net/s2096828/article/details/83744677)
- [TypeScript 进阶之重难点梳理](https://xiaozhuanlan.com/topic/6703895421)
- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese)
- [TypeScript 精通指南](https://nodelover.gitbook.io/typescript/)
- [深入探索 Typescript 的高阶用法](https://mp.weixin.qq.com/s/lgwS59zY4iFFBbCcyvF3CQ)
