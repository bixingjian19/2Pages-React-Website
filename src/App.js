import "./App.css";
import HelloWorld from "./component/HelloWorld";
import CounterExample from "./component/CounterExample";
function App() {
  return (
    <div>
      <CounterExample />
    </div>
  );
}

export default App; //export 预示这个文件不是我们的入口文件, 这只是一个组件, 被别的文件引用
