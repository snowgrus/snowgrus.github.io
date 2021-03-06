---
title: 7个可靠的React组件的架构属性--第三部分
date: "2017-10-18T14:12:03.284Z"
path: "7-architectural-attributes-of-a-reliable-react-component-3"

status: "draft"
tags: "react,components"
type: "translation"
originTitle: "7 architectural attributes of a reliable React component"
originAutor: "Dmitri Pavlutin"
originUrl: "https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/?utm_source=reactnl&utm_medium=email#1singleresponsibility"
---

> 译者说

我喜欢React拥抱基于组件的架构。 您可以从较小的部分组成复杂的用户界面，利用组件的可重用性与对DOM操作的抽象。

基于组件的开发是有效的：一个复杂的系统是由专门的和易于管理的部分构建的。 然而，只有精心设计的组件才能保证得到构成与可重用性的好处。

尽管应用程序的复杂性，赶快满足最后期限和意想不到的变化的要求，您必须不断走在细线上的架构正确性。使您的组件脱钩，专注于单个任务，经过良好测试。

![ee](https://dmitripavlutin.com/content/images/2017/07/work-life-balance.jpg)

不幸的是，遵循错误的路径是诱人的：写出很多职责的大部件，高耦合组件，忘记单元测试。这些增加了技术债务，逐渐难以修改现有的或创造新的功能。

写一个React应用程序时，我经常问自己：

* 
    * 如何正确构造组件？
    * 在什么时候一个大的组件应该分成更小的组件？
    * 如何设计防止紧耦合的部件之间的通讯？

幸运的是，可靠的组件具有共同的特点。我们来研究这7个有用的标准，并详细介绍案例研究。

目录：

1. [“单一职责” ](#1)
    1. 1 [多重职责的陷阱](#1.1) 
    1. 2 [案例研究：使组成部分有一个职责](#1.2)
    1. 3 [案例研究：HOC赞成单一职责原则](#1.3)
2. [“封装”](#2)
    2. 1 [信息隐藏](#2.1)
    2. 2 [通信](#2.2)
    2. 3 [案例研究：封装恢复](#2.3)
3. [“可组合”](#3)
    3. 1 [组合效益](#3.1)
4. [“可重用”](#4)
    4. 1 [跨应用程序重用](#4.1)
    4. 2 [重用第三方库](#4.2)
5. [“纯粹”或“几乎纯粹的”](#5)
    5. 1 [案例研究：从全球变量中净化](#5.1)
    5. 2 [案例研究：从网络请求中的纯化](#5.2)
    5. 3 [将纯净变为纯](#5.3)
6. [“可测试”和“测试”](#6)
    6. 1 [案例研究：可测试手段设计良好](#6.1)
7. [“有意义”](#7)
    7. 1 [组件命名](#7.1)
    7. 2 [案例研究：编写自解释代码](#7.2)
    7. 3 [表现力楼梯](#7.3)
8. [不断改进](#8)
9. [可靠性很重要](#9)
10. [结论](#10)

<h2 id="1">“单一职责”</h2>

> 当一个组件有一个理由要改变时，该组件有一个职责。

编写一个组件时要考虑的基本原则就是[单一职责原则](https://en.wikipedia.org/wiki/Single_responsibility_principle)。

单一职责原则（简称SRP）是修改组件的一个理由。

一个组件有一个理由在实现一个职责时改变，或者当它做一件事情时更简单。

职责是呈现项目列表，或显示日期选择器，或提出HTTP请求，绘制图表，或者延迟加载图像等。您的组件应仅选择一个职责并实施它。当您修改组件实现其职责的方式（例如更改以限制项目列表的项目数量职责） - 它有一个原因要更改。

为什么只有一个原因要改变呢？因为组件的修改被隔离并受到控制。

有一个职责限制了组件尺寸，并将其集中在一件事上。一个集中在一个方面的组件是方便的代码，并且稍后修改，重用和测试。

我们来看几个例子。

示例1组件获取远程数据，相应地，有一个原因可以在提取逻辑更改时更改。
改变的原因发生在以下情况：

服务器URL已修改
响应格式被修改
您要使用不同的HTTP请求库
或者仅涉及获取逻辑的任何修改。
示例2表组件将数据数组映射到行组件列表，因为在映射逻辑更改时有一个原因要更改。
发生变更的原因是：

您有一个任务来限制渲染的行组件的数量（例如最多显示25行）
当没有要显示的项目时，系统会要求您显示一条消息“列表为空”
或与阵列的映射任何修改到行部件只。
你的组件有很多职责吗？如果答案是肯定的，则将组件按每个人的职责分成块。

关于单一职责原则的另一个推论说，要围绕一个明显区分的变化轴创建组件。变化的轴线吸引了相同含义的修改。
在前面的2个例子中，更改的轴是提取逻辑和映射逻辑。

如果您发现SRP有点模糊，请查看这篇文章。

在项目初期编写的单位将经常改变，直到达到发布阶段。这些变化往往需要孤立地容易地修改组件：SRP的目标。