import { useState } from "react";

const Form = (props) => {
    const initialVal = props.initualCount;
    const [counter, setCounter] = useState(initialVal);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    const decreaseCounter = () => {
        setCounter(counter - 1);
    }
    const updateParent = () => {
        props.getCounter(counter);
    }
    return (
        <div>
            <h1>Child 1</h1>
           
            <div>{counter}</div>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
            <button onClick={updateParent}>UpdateParent</button>
        </div>
    );
}
export default Form;