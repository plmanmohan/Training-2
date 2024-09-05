import { Component } from "react";

class Child extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount in Child")
    }
    componentDidMount() {
        console.log("componentDidMount in Child")
    }
    render() {
        console.log("render ");
        return (
            <div>Child</div>
        )
    }
}
export default Child;