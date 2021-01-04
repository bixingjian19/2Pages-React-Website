import HelloWorld from "./component/HelloWorld";
import Header from "./component/Header";
import Footer from "./component/Footer";

import CounterExample from "./component/CounterExample";

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Quentin" />
      <Footer />
    </div>
  );
}

export default App; //export 预示这个文件不是我们的入口文件, 这只是一个组件, 被别的文件引用
