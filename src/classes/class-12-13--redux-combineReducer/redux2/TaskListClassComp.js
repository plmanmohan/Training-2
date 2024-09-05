import { Component } from "react";
import { connect } from "react-redux";
import Task from "./Task";

class TaskListClassComp extends Component {
  generateTasks = () => {
    const {filter, taskList} = this.props;
    if (filter === "COMPLETED") {
      const newList = taskList.filter((item) => item.complete);
      return newList.map((item, i) => <Task key={i} data={item} />);
    } else if (filter === "INCOMPLETED") {
      const newList = taskList.filter((item) => !item.complete);
      return newList.map((item, i) => <Task key={i} data={item} />);
    } else {
      return taskList.map((item, i) => <Task key={i} data={item} />);
    }
  };
  render() {
    return (
      <div>
        <h1>TaskList</h1>
        <ul>{this.generateTasks()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
    filter: state.filter,
  };
};
export default connect(mapStateToProps, null)(TaskListClassComp);
