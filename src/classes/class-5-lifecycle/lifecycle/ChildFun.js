import { useEffect } from "react";

const ChildFun = () => {
    useEffect(()=> {
        console.log("useEffect 1")
        return () => {
            console.log("useEffect 3")
        }
    });
    return (
        <div>Child Functional</div>
    )
}
export default ChildFun;