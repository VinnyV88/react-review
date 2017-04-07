import React from 'react';

const num1 = 6;
const num2 = 3;

class App extends React.Component {
  constructor(props) {
    super(props);
    //since num1 and num2 are defined above, I can initialize this.state by only using the key names as the values are implied (num1: num1, num2: num2)
    this.state = {num1,
                  num2};
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

    render() {
  return (
    <div>
      <h1>JSX Variables</h1>
      <p>{this.state.num1} + {this.state.num2} = {this.state.num1 + this.state.num2}</p>
      <p>{this.state.num1} / {this.state.num2} = {this.state.num1 / this.state.num2}</p>
      <p>
        {this.state.num1} + {this.state.num2} * randomNumberBetween 1 & 10. = {this.state.num1 + this.state.num2 * (Math.floor(Math.random() * 10) + 1)}
      </p>
    </div>
  );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>JSX Variables</h1>
//       <p>num1 + num2 = {num1 + num2}</p>
//       <p>num1 / num2 = {num1 / num2}</p>
//       <p>
//         num1 + num2 * randomNumberBetween 1 & 10. = {num1 + num2 * (Math.floor(Math.random() * 10) + 1)}
//       </p>
//     </div>
//   );
// }

export default App;
