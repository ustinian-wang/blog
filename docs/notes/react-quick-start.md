# react入门

## 最开始的[demo](https://codesandbox.io/p/sandbox/react-dev-nh2zj3?file=%2Fsrc%2Fstyles.css%3A1%2C1-49%2C1&utm_medium=sandpack)

### package.json的内容如下
```json
{  
  "name": "react-demo",  
  "version": "0.0.0",  
  "main": "/src/index.js",  
  "scripts": {  
    "start": "npx react-scripts start",  
    "build": "npx react-scripts build",  
    "test": "npx react-scripts test --env=jsdom",  
    "eject": "npx react-scripts eject"  
  },  
  "dependencies": {  
    "react": "^18.3.1",  
    "react-dom": "^18.3.1"  
  },  
  "browserslist": {  
    "production": [  
      ">0.2%",  
      "not dead",  
      "not op_mini all"  
    ],  
    "development": [  
      "last 1 chrome version",  
      "last 1 firefox version",  
      "last 1 safari version"  
    ]  
  }}
```

####  Q: 这里的react-scripts到底是什么？
- 通常vue可以在html+cdn的方式，直接运行demo
- 如果走本机服务，需要一个webpack，那么react-scripts是否类似于webpack的角色，是一个工程化工具？
- 你可以认为它等同于webpack，但是你不需要做任何配置就可以启动本机服务预览react demo
- `react-scripts` 是 Create React App (CRA) 工具包的一部分，它提供了一组命令和配置，帮助你快速启动、构建和测试 React 应用。它封装了 Webpack、Babel 和其他构建工具的配置，使得开发者可以专注于编写代码，而不需要手动配置这些工具。你可以使用 `react-scripts start` 启动开发服务器，使用 `react-scripts build` 打包生产环境代码，使用 `react-scripts test` 运行测试。
#### Q 如果我想定制化工程化的配置，要怎么搞？

如果你想定制化 Create React App 的工程化配置，可以使用以下几种方法：

1. **`eject` 命令**：使用 `npm run eject` 或 `yarn eject` 将 Create React App 的内部配置（如 Webpack、Babel）暴露出来，允许你直接修改。这会将配置文件和依赖项复制到你的项目中，但这一步不可逆，之后你需要自己维护这些配置。

2. **使用自定义配置工具**：使用像 [CRACO](https://github.com/gsoft-inc/craco) 或 [react-app-rewired](https://github.com/timarney/react-app-rewired) 这样的工具，它们允许你在不弹出的情况下修改配置。例如，CRACO 允许你通过配置文件（`craco.config.js`）来定制 Webpack 配置，而不需要 `eject`。

3. **自定义配置文件**：创建自定义的 Webpack 配置或 Babel 配置，并将其集成到现有的 CRA 项目中。这通常需要一些额外的配置和设置，但提供了更高的灵活性。

选择最适合你的方法取决于你的需求和对配置复杂度的容忍度。

### 入口文件
```jsx
import React, { StrictMode } from "react";  
import { createRoot } from "react-dom/client";  
import "./styles.css";  
  
import App from "./App.jsx";  
  
// 这里类似new Vue的创建方式 new Vue({el:"#root"});
const root = createRoot(document.getElementById("root"));  
  
// $vm.render添加渲染函数  
root.render(  
    <StrictMode>  
        <App />  
    </StrictMode>  
);
```
- react
- react-dom/client

### jsx语法
我们可以把函数当作一个标签嵌套进去
```jsx

function MyButton() {  
    return (        <button>            I'm a button        </button>    );}  
  
export default function MyApp() {  
    return (        <div>            <h1>Welcome to my app</h1>            <MyButton />        </div>    );}

```
又或者引用变量
```jsx
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

```

## 条件渲染

```jsx
let content;  

if (isLoggedIn) {  
	
	content = <AdminPanel />;  

} else {  
	
	content = <LoginForm />;  

}  

return (  

	<div>  
	
	{content}  
	
	</div>  

);
```
### 三元表达式
```jsx
<div>  

	{isLoggedIn ? (  

		<AdminPanel />  

	) : (  

		<LoginForm />  

	)}  

</div>
```

## 列表渲染
```jsx
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

```

## 事件绑定

```jsx
function MyButton() {  

function handleClick() {  

alert('You clicked me!');  

}  

  

return (  

<button onClick={handleClick}>  

Click me  

</button>  

);  

}
```

## 数据响应

```jsx
function MyButton() {  

const [count, setCount] = useState(0);  

  

function handleClick() {  

setCount(count + 1);  

}  

  

return (  

<button onClick={handleClick}>  

Clicked {count} times  

</button>  

);  

}
```


## ref 和 context

### `ref` 的用法

`ref` 是 React 中用于访问 DOM 元素或类组件实例的方式。它常用于以下场景：

- **访问 DOM 元素**：可以通过 `ref` 获取对特定 DOM 元素的直接访问。
- **调用组件方法**：可以通过 `ref` 调用类组件上的方法。

**基本用法**：
```jsx
import React, { useRef, useEffect } from 'react';

function Example() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // 聚焦到输入框
  }, []);

  return <input ref={inputRef} />;
}
```

### `context` 的用法

`context` 用于在组件树中共享数据，而不需要通过 `props` 一层一层传递。

**基本用法**：

1. **创建 Context**：
   ```jsx
   import React, { createContext, useContext, useState } from 'react';

   const ThemeContext = createContext('light');
   ```

2. **提供 Context**：
   ```jsx
   function App() {
     const [theme, setTheme] = useState('light');

     return (
       <ThemeContext.Provider value={theme}>
         <Toolbar />
       </ThemeContext.Provider>
     );
   }
   ```

3. **消费 Context**：
   ```jsx
   function Toolbar() {
     const theme = useContext(ThemeContext);
     return <div>Current theme: {theme}</div>;
   }
   ```

**结合使用**：你可以在一个组件中使用 `ref` 来直接操作 DOM 或组件实例，同时在另一部分组件树中使用 `context` 来传递数据。这种组合能让你更灵活地管理组件的行为和数据。

### Q：如何通过context传递多个值？

如果你需要通过 `context` 传递多个值，可以将它们组合在一个对象中，并通过该对象提供和消费。

**步骤如下**：

1. **创建 Context**：
   ```jsx
   import React, { createContext, useContext, useState } from 'react';

   const AppContext = createContext({
     user: null,
     theme: 'light'
   });
   ```

2. **提供 Context**：
   ```jsx
   function App() {
     const [user, setUser] = useState('Alice');
     const [theme, setTheme] = useState('dark');

     return (
       <AppContext.Provider value={{ user, theme, setUser, setTheme }}>
         <Toolbar />
       </AppContext.Provider>
     );
   }
   ```

3. **消费 Context**：
   ```jsx
   function Toolbar() {
     const { user, theme, setUser, setTheme } = useContext(AppContext);

     return (
       <div>
         <p>User: {user}</p>
         <p>Theme: {theme}</p>
         <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
           Toggle Theme
         </button>
       </div>
     );
   }
   ```

在这个例子中，`AppContext` 传递了一个对象，其中包含了 `user`、`theme` 以及更新这些值的方法。这样，你就可以在任何消费该 context 的组件中访问和更新这些值。

## 函数组件和类组件
### 两者的区别
函数组件和类组件是 React 中创建组件的两种方式，各有不同的特点：

1. **函数组件**：
   - **语法简洁**：是一个简单的 JavaScript 函数，接受 `props` 作为参数并返回 JSX。
   - **无状态**：原本不支持内部状态，但现在可以使用 Hooks（如 `useState`、`useEffect`）来管理状态和副作用。
   - **性能更优**：通常由于更少的生命周期方法和简洁的语法，性能上比类组件稍好。
   - **例子**：
     ```jsx
     function MyComponent(props) {
       return <div>Hello, {props.name}</div>;
     }
     ```

2. **类组件**：
   - **语法复杂**：需要继承自 `React.Component`，并实现 `render` 方法来返回 JSX。
   - **有状态**：可以在组件内使用 `this.state` 和 `this.setState` 来管理状态。
   - **生命周期方法**：提供了多种生命周期方法，如 `componentDidMount`、`componentDidUpdate` 等。
   - **例子**：
     ```jsx
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = { name: 'World' };
       }

       render() {
         return <div>Hello, {this.props.name}</div>;
       }
     }
     ```

总体来说，函数组件由于其简洁和现代的特性，已经成为 React 开发中的主流，而类组件则仍然在许多老旧项目和特定场景中使用。
### state的创建和更新
在 React 中，`state` 是组件内部的状态，可以用于控制组件的渲染和行为。以下是创建和更新 `state` 的基本方法：

### **函数组件**

1. **创建 `state`**：
   使用 `useState` Hook 来创建和管理 `state`。
   ```jsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0); // 创建 `state`，初始值为 0

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

2. **更新 `state`**：
   使用 `setState` 函数来更新 `state`，这将触发组件重新渲染。
   ```jsx
   <button onClick={() => setCount(count + 1)}>Increment</button>
   ```

### **类组件**

1. **创建 `state`**：
   在构造函数中初始化 `state`。
   ```jsx
   import React from 'react';

   class Counter extends React.Component {
     constructor(props) {
       super(props);
       this.state = { count: 0 }; // 创建 `state`，初始值为 0
     }

     render() {
       return (
         <div>
           <p>Count: {this.state.count}</p>
           <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
         </div>
       );
     }
   }
   ```

2. **更新 `state`**：
   使用 `this.setState` 方法来更新 `state`，并触发组件重新渲染。
   ```jsx
   <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
   ```

在函数组件中，`useState` 是用于管理状态的主要工具，而在类组件中，则使用 `this.state` 和 `this.setState`。
## useEffect
类似watch
`useEffect` 是 React 中的一个 Hook，用于处理副作用（side effects）。副作用是指在组件的渲染过程之外发生的操作，比如数据获取、订阅、手动修改 DOM 或者进行清理工作。

#### **基本用法**

`useEffect` 可以用来替代类组件中的生命周期方法，如 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount`。它接受两个参数：

1. **副作用函数**：定义副作用的操作
2. **依赖数组（可选）**：定义何时重新执行副作用函数

#### **语法**

```jsx
useEffect(() => {
  // 副作用代码
  return () => {
    // 清理代码（可选）
  };
}, [dependencies]);
```

- **副作用函数**：在组件渲染后执行。可以返回一个清理函数，React 会在组件卸载时或者在副作用函数再次执行前调用这个清理函数。
- **依赖数组**：指定副作用函数依赖的值，只有当这些依赖值发生变化时，副作用函数才会重新执行。如果不传递依赖数组，副作用函数会在每次渲染后执行。如果传递空数组，副作用函数只会在组件挂载时执行一次（相当于 `componentDidMount`）。

#### **示例**

1. **基本用法**：

   ```jsx
   import React, { useState, useEffect } from 'react';

   function Example() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       // 副作用代码
       document.title = `You clicked ${count} times`;

       // 可选的清理代码
       return () => {
         document.title = 'React App';
       };
     }, [count]); // 依赖数组

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>Click me</button>
       </div>
     );
   }
   ```

   在这个示例中，副作用函数会在 `count` 变化时更新文档标题。

2. **无依赖数组**：

   ```jsx
   useEffect(() => {
     console.log('Component rendered or updated');
   });
   ```

   副作用函数会在每次渲染后执行。

3. **空依赖数组**：

   ```jsx
   useEffect(() => {
     console.log('Component mounted');

     return () => {
       console.log('Component unmounted');
     };
   }, []);
   ```

   副作用函数仅在组件挂载时执行一次，返回的清理函数会在组件卸载时执行。

#### **注意事项**

- 副作用函数中的代码可以执行异步操作，但需要确保正确处理这些操作（例如，清理未完成的请求）。
- 如果副作用依赖于某些外部变量，确保将这些变量包含在依赖数组中，以避免潜在的 bug。
- 确保副作用函数是纯的，即它不修改外部状态，只依赖于其参数和内部状态。

`useEffect` 是管理副作用的强大工具，使得函数组件能够处理组件生命周期内的各种操作。
## useMemo
类似computed
`useMemo` 是 React 中的一个 Hook，用于优化性能，通过缓存计算结果来避免不必要的重新计算。它接受两个参数：

1. **计算函数**：用于计算缓存值的函数。
2. **依赖数组**：指定计算函数依赖的值，只有当这些依赖值发生变化时，计算函数才会重新执行。

#### **语法**

```jsx
const memoizedValue = useMemo(() => {
  // 计算值
  return computedValue;
}, [dependencies]);
```

- **计算函数**：返回一个计算后的值，只有当依赖数组中的值变化时，计算函数才会重新运行。
- **依赖数组**：如果依赖项未变化，`useMemo` 会返回缓存的值，避免了昂贵的计算操作。

#### **示例**

1. **基本用法**：

   ```jsx
   import React, { useState, useMemo } from 'react';

   function Example() {
     const [count, setCount] = useState(0);
     const [input, setInput] = useState('');

     const computedValue = useMemo(() => {
       // 假设这是一个昂贵的计算
       return input.split('').reverse().join('');
     }, [input]); // 仅当 input 改变时重新计算

     return (
       <div>
         <input value={input} onChange={(e) => setInput(e.target.value)} />
         <p>Reversed input: {computedValue}</p>
         <button onClick={() => setCount(count + 1)}>Count: {count}</button>
       </div>
     );
   }
   ```

   在这个示例中，`computedValue` 只会在 `input` 改变时重新计算，而不会因为 `count` 的变化而重新计算，从而优化了性能。

#### **注意事项**

- `useMemo` 主要用于优化性能，避免不必要的计算。请确保只有在确实需要优化性能时使用它。
- 过度使用 `useMemo` 可能导致代码复杂性增加，因此应谨慎使用。

`useMemo` 有助于提高应用性能，尤其是在处理昂贵计算或渲染逻辑时，确保仅在必要时进行计算。
## useCallback
并避免重复挂载组件方法
`useCallback` 是 React 中的一个 Hook，用于优化函数的引用稳定性。它返回一个 memoized 的回调函数，这个回调函数只有在依赖数组中的值发生变化时才会被重新创建。这样可以避免每次渲染时都创建一个新的函数引用，从而减少不必要的重新渲染。

#### **语法**

```jsx
const memoizedCallback = useCallback(
  () => {
    // 回调函数体
  },
  [dependencies] // 依赖数组
);
```

- **回调函数**：需要被 memoized 的函数。
- **依赖数组**：当数组中的值发生变化时，`useCallback` 会返回一个新的函数，否则返回缓存的函数。

#### **示例**

1. **基本用法**：

   ```jsx
   import React, { useState, useCallback } from 'react';

   function Example() {
     const [count, setCount] = useState(0);

     const handleClick = useCallback(() => {
       alert('Button clicked!');
     }, []); // 依赖数组为空，函数只在组件挂载时创建一次

     return (
       <div>
         <button onClick={handleClick}>Click me</button>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

   在这个示例中，`handleClick` 函数仅在组件挂载时创建一次，因为依赖数组为空。即使 `count` 状态变化，`handleClick` 函数的引用也不会变化。

2. **与子组件优化结合**：

   `useCallback` 可以与 `React.memo` 或 `PureComponent` 结合使用，以避免子组件因父组件的重新渲染而不必要地重新渲染。

   ```jsx
   import React, { useState, useCallback } from 'react';

   const Child = React.memo(({ onClick }) => {
     console.log('Child component rendered');
     return <button onClick={onClick}>Click me</button>;
   });

   function Parent() {
     const [count, setCount] = useState(0);

     const handleClick = useCallback(() => {
       console.log('Button clicked!');
     }, []); // handleClick 函数仅在组件挂载时创建一次

     return (
       <div>
         <Child onClick={handleClick} />
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

   在这个示例中，`Child` 组件使用 `React.memo` 进行优化，只在 `onClick` 属性发生变化时重新渲染。如果 `handleClick` 没有变化，`Child` 组件就不会重新渲染，从而提高性能。

#### **注意事项**

- **避免过度使用**：`useCallback` 主要用于优化性能，尤其是在函数作为 props 传递给子组件时。过度使用可能会导致代码复杂性增加。
- **依赖数组**：确保依赖数组中的所有依赖项都正确无误。如果漏掉了某些依赖项，可能会导致函数行为不符合预期。

`useCallback` 是优化性能的重要工具，它可以确保函数在依赖项未变化时保持相同的引用，帮助避免不必要的渲染。
## useRef
`useRef` 是 React 提供的一个 Hook，用于访问和操作 DOM 元素或存储可变的数据，而不会引发组件的重新渲染。它非常适合用于以下场景：

1. **访问 DOM 元素**：你可以通过 `useRef` 来获取对 DOM 元素的直接引用，以便执行操作或获取元素的属性。
2. **存储可变数据**：`useRef` 也可以用来保存不需要触发重新渲染的数据，比如计数器或者其他临时数据。

### **语法**

```jsx
const ref = useRef(initialValue);
```

- **initialValue**：`ref` 的初始值。通常在 DOM 引用中设置为 `null`，在存储其他数据时可以设置为所需的初始值。
- **ref**：返回一个可变的对象，该对象具有一个 `current` 属性。你可以通过 `ref.current` 访问或更新这个值。

### **示例**

1. **访问 DOM 元素**

   ```jsx
   import React, { useRef, useEffect } from 'react';

   function FocusInput() {
     const inputRef = useRef(null);

     useEffect(() => {
       // 组件挂载后聚焦到输入框
       inputRef.current.focus();
     }, []);

     return (
       <input
         ref={inputRef}
         type="text"
         placeholder="Focus me on mount"
       />
     );
   }
   ```

   在这个示例中，`inputRef` 被用来获取对 `<input>` 元素的引用，并在组件挂载后通过 `inputRef.current.focus()` 自动将焦点设置到输入框上。

2. **存储可变数据**

   ```jsx
   import React, { useRef, useState } from 'react';

   function Timer() {
     const [count, setCount] = useState(0);
     const timerRef = useRef(null);

     const startTimer = () => {
       timerRef.current = setInterval(() => {
         setCount(prevCount => prevCount + 1);
       }, 1000);
     };

     const stopTimer = () => {
       clearInterval(timerRef.current);
     };

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={startTimer}>Start</button>
         <button onClick={stopTimer}>Stop</button>
       </div>
     );
   }
   ```

   在这个示例中，`timerRef` 用来存储定时器的 ID。因为 `useRef` 不会导致组件重新渲染，所以我们可以使用它来存储这个 ID，避免在每次渲染时都创建新的定时器。

### **注意事项**

- **不会触发重新渲染**：`useRef` 的变化不会导致组件重新渲染。这是它与 `useState` 的主要区别之一。
- **初始值**：`useRef` 的初始值只在组件首次渲染时设置一次，之后可以通过 `ref.current` 进行修改。它不会被重新初始化。

`useRef` 是一个非常强大的工具，用于直接操作 DOM 元素或在函数组件中存储持久数据。了解它的工作原理可以帮助你更高效地管理组件中的状态和行为。
## useContext
用来读取context暴露的值
`useContext` 是 React 提供的一个 Hook，用于在函数组件中访问 React 上下文（Context）的值。React 上下文是一种在组件树中传递数据的机制，可以避免层层传递 props。

### **概述**

- **目的**：`useContext` 使得函数组件可以直接访问通过 `React.createContext` 创建的上下文数据，而无需通过组件树中的每一层手动传递 props。
- **用法**：`useContext` 接收一个上下文对象（通常由 `React.createContext` 创建），并返回当前上下文的值。

### **语法**

```jsx
const value = useContext(MyContext);
```

- **MyContext**：上下文对象，通常是通过 `React.createContext` 创建的。
- **value**：当前上下文的值，可以是上下文提供的任何数据。

### **示例**

1. **创建上下文**

   首先，你需要使用 `React.createContext` 创建一个上下文对象。

   ```jsx
   import React from 'react';

   const ThemeContext = React.createContext('light'); // 创建一个上下文，默认值为 'light'
   ```

2. **提供上下文**

   使用 `Context.Provider` 组件提供上下文的值。通常这个组件会包裹在更高层的组件中。

   ```jsx
   import React from 'react';
   import { ThemeContext } from './ThemeContext'; // 导入上下文

   function App() {
     return (
       <ThemeContext.Provider value="dark"> {/* 提供上下文值 'dark' */}
         <Toolbar />
       </ThemeContext.Provider>
     );
   }

   function Toolbar() {
     return <ThemedButton />;
   }
   ```

3. **消费上下文**

   使用 `useContext` 在需要的组件中获取上下文的值。

   ```jsx
   import React, { useContext } from 'react';
   import { ThemeContext } from './ThemeContext'; // 导入上下文

   function ThemedButton() {
     const theme = useContext(ThemeContext); // 获取上下文的值
     return (
       <button style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
         {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
       </button>
     );
   }
   ```

### **注意事项**

- **性能**：使用 `useContext` 不会造成性能问题，因为它只会在上下文的值发生变化时触发组件重新渲染。只有当上下文的提供者的 `value` 属性发生变化时，使用该上下文的所有组件才会重新渲染。
- **嵌套上下文**：你可以嵌套多个上下文，并且一个组件可以消费多个上下文的值。

### **优缺点**

**优点**：
- **简化数据传递**：避免了通过组件树传递 props，从而简化了数据流。
- **提高代码可读性**：使得组件更容易访问共享的数据。

**缺点**：
- **调试困难**：上下文的使用可能使得数据流变得不那么直观，需要理解上下文的层级结构来进行调试。
- **过度使用问题**：在复杂的应用中，如果滥用上下文，可能导致性能问题或使得组件间的依赖关系变得不清晰。

`useContext` 是 React 提供的强大功能，适用于需要在组件树中传递全局数据的场景，例如主题、用户认证信息、语言设置等。

## 高阶组件

## practice

https://react.dev/learn/tutorial-tic-tac-toe



