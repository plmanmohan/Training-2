import { useState } from "react";
function ChildFunctionalComp() {
  const [userName, setUserName] = useState("BalRam");
  const [age, setAge] = useState("");
  const [uclass, setUClass] = useState("");

  const handleOnchange = (e) => {
    switch (e.target.name) {
      case "uname":
        setUserName(e.target.value);
        break;
      case "age":
        setAge(e.target.value);
        break;
      case "uclass":
        setUClass(e.target.value);
        break;
        default:
            break;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userName, " age: ", age, " class: ", uclass)
  };
  return (
    <div>
      <h4>Chikd Functional Component</h4>

      <form>
        <input
          onChange={(e) => handleOnchange(e)}
          placeholder="name"
          name="uname"
        />
        <input onChange={handleOnchange} placeholder="age" name="age" />
        <input onChange={handleOnchange} placeholder="class" name="uclass" />
        <button onClick={onSubmit}> Submit</button>
      </form>
    </div>
  );
}
export default ChildFunctionalComp;
