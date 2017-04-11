import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import Image from "./Image";
import Display from "./Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickCounter: 0
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState(prevState => ({
      clickCounter: prevState.clickCounter + 1
    }) 
    );
  }

  renderEasterEggs(clicks) {
    return (
      <div>
        {clicks >= 10 &&
          <div>
            <h1>Surprise!</h1>
            <Image source="easteregg.png" />
          </div>
        }
        {clicks >= 20 &&
          <Image source="silveregg.jpg" />
        }
        {clicks >= 30 &&
          <Image source="goldegg.jpg" />
        }
      </div>
   );
  }

  render() {
    return (
      <div>
        <Button type="default" onClick={this.handleClick}>
          Happy Easter
        </Button>
        <Display clicks={this.state.clickCounter} />
        {this.renderEasterEggs(this.state.clickCounter)}
      </div>
    );
  }
}

export default App;
