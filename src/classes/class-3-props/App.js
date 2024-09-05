import { useState } from "react";
import "./App.css";
// import Child from './components/Child';
// import ChildFunctionalComp from "./components/ChildFunctionalComp";
import Form from "./components/Form";
import FormClass from "./components/FormClass";

function App() {
  const [counter, setCounter] = useState(0);
  const initualCount = 25;
  const user = "Ram";

  const getCounter = (counter) => {
    console.log('counter: ', counter);
    setCounter(counter);
  }
  return (
    <div>
      <h1>Welcome App</h1>
     {/*  <Child />

      <ChildFunctionalComp /> */}
      <h1>Counter in Parent: {counter}</h1>
      <Form initualCount={initualCount} globalUser={user} getCounter={getCounter}/>
      <FormClass initualCount={initualCount} globalUser={user} counter={counter}/>
    </div>
  );
}

export default App;



