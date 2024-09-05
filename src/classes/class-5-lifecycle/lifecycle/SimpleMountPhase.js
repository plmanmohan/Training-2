import { Component } from "react";

class SimpleMountPhase extends Component{
    constructor(props) {
        super(props);
        this.state = {
            favColor: "red"
        }
        console.log('constructor 1');
    }
    static getDerivedStateFromProps (props, state) {
        console.log('getDerivedStateFromProps props.color: ', state);
        return{favColor: props.color};
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    
    render() {
        console.log('render ');
        return (
            <div>My favorite color is {this.state.favColor}</div>
        )
    }
}
export default SimpleMountPhase;