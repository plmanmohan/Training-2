import { Component } from "react";
import Child from "./Child";

class SampleUpdatePhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favColor: "red",
      flag: true
    };
    console.log("constructor 1");
  }
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps props.color: ", state);
//     return { favColor: props.color };
//   }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prvProps, prevState) {
    console.log('getSnapshotBeforeUpdate: ', prvProps, " prevState: ", prevState);
    return {};
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  
  changeColor = () => {
    this.setState({favColor: 'blue', flag: !this.state.flag});
  }
  render() {
    console.log("render ");
    return (
      <div>
        <h1>My favorite color is {this.state.favColor}</h1>
        {this.state.flag && <Child />}
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}
export default SampleUpdatePhase;
