import { forwardRef } from "react";
import './stryle.css';
const FancyButton = (props, ref) => {
   
  return (
    <div>
      <button ref={ref} className="fancyBtn">{props.children}</button>
      <input  type="text" placeholder="Input your name"/>
    </div>
  );
};

export default forwardRef(FancyButton);
