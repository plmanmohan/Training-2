import { Component } from "react";

let name = "Ram";

class Child extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      age: "",
      class: "",
      name: "",
    };
    this.handleOnchange = this.handleOnchange.bind(this);
  }
  handleOnchange (e) {
   console.log(this)
    if (e.target.name === "uname") {
      this.setState({ userName: e.target.value });
    }
    if (e.target.name === "age") this.setState({ age: e.target.value });
    if (e.target.name === "class") this.setState({ class: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h4>Child</h4>
        <h4>Welcome Mr.{this.state.userName}</h4>
        <form>
          <input
            onChange={this.handleOnchange}
            placeholder="name"
            name="uname"
          />
          <input
            onChange={this.handleOnchange}
            placeholder="age"
            name="age"
          />
          <input
            onChange={this.handleOnchange}
            placeholder="class"
            name="class"
          />
          <button onClick={this.onSubmit}> Submit</button>
        </form>
      </div>
    );
  }
}
export default Child;
