import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import Display from "./Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  
  // handleClick() {
// Using 'property initializer syntax', which is experimental, but a preferred way of avoiding having to bind `this` to an event handler in the constructor function of a component
//having to bind `this` to an event handler can be confusing and if forgotten to do, will break your program  
  handleClick = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState(prevState => ({
      count: prevState.count + 1
    }) 
    );
  }

  handleDecClick = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }) 
    );

  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          Increment +
        </Button>
        <Button type="danger" onClick={this.handleDecClick}>
          Decrement -
        </Button>
        <Display count={this.state.count} />
      </div>
    );
  }
}

export default App;
