import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0); //setCount是函数  useState是一个Hook输入一个参数(想要存的)返回两个参数
  return (
    <div>
      <h1>{count}</h1>
      <h1 onClick={() => setCount(count + 1)}>Plus</h1>
      <h1 onClick={() => setCount(count - 1)}>Minus</h1>
    </div>
  );
}

export default CounterExample;
