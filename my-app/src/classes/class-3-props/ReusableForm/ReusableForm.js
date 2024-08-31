import { Component, useState } from "react";

class ReusableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  handleOnchange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log("submited");
  };
  generateFields = () => {
    const { fields } = this.props;
    return fields.map((field, index) => (
      <div key={index} className="form-group">
        <label>{field.lable}</label>
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          onChange={this.handleOnchange}
        />
      </div>
    ));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="reusable-form">
        {this.generateFields()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ReusableForm;
