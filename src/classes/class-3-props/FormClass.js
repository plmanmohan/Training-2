import { Component } from "react";

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
  }
  increase = () => {
    this.setState({count: this.state.count +1});
  }
  decrease = () => {
    this.setState({count: this.state.count -1});
  }
  updateParent = () => {
    this.props.getCounter(this.state.count);
  }
  render() {
    const { globalUser, initualCount, counter } = this.props;
    const {count} = this.state;
    return (
      <div>
        <h1>Child 2</h1>
        <div>count: {count}</div>
        <div>count from Parent: {counter}</div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.updateParent}>Update Parent</button>
      </div>
    );
  }
}
export default FormClass;
