import { useEffect, useState } from "react";
import ChildFun from "./ChildFun";
const SimpleFunctionalComponent = () => {
    const [favColor, setFavColor] = useState('red')
    const [flag, setFFlag] = useState(true)
    useEffect(()=> {
        console.log("useEffect 1")
    }, []);
    useEffect(()=> {
        console.log("useEffect 1")
    }, [favColor]);

    const changeColor = () => {
        setFavColor('blue');
        setFFlag(!flag);
      }
    return (
        <div>        
            <div>My Fav color: {favColor}</div>
            {flag && <ChildFun />}
            <button onClick={changeColor}>Click</button>
        </div>

    )
}

export default SimpleFunctionalComponent;