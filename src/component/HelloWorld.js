import React from "react";

// function HelloWorld(props) {
//   return <h1> Hello {props.name}</h1>;
// }
class HelloWorld extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default HelloWorld;
