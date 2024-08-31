import { Component, createRef } from "react";

class Focusmanager extends Component {
    constructor(props) {
        super(props);
        this.refName = createRef();
        this.refEmail = createRef();
        this.refPassword = createRef();
    }
    focusInput = (inputRef) => {
        inputRef.current.focus();
    }
    render() {
        return (
            <div className="focus-manager">
                <div className="input-group">
                    <label>Name</label>
                    <input ref= {this.refName} type="text" placeholder="Enter your Name" />
                    <button onClick={() => this.focusInput(this.refName)}>Focus Name</button>
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input ref= {this.refEmail} type="email" placeholder="Enter your Email" />
                    <button onClick={() => this.focusInput(this.refEmail)}>Focus Email</button>
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input ref= {this.refPassword} type="password" placeholder="Enter your password" />
                    <button onClick={() => this.focusInput(this.refPassword)}>Focus Password</button>
                </div>
            </div>
        )
    }
}
export default Focusmanager;