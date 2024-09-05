import "./App.css";

function App() {
  let isUserLoggedIn = true;

  const clickHandler = (e) => {
    isUserLoggedIn = !isUserLoggedIn;
    console.log("Clicked", isUserLoggedIn);
  }
  const handleOnchange = (e) => {
    console.log(e.target.value.trim());
  }
  return (
    <div>
      {
      (isUserLoggedIn) ?
      <div style={{backgroundColor: "#ff0000", color: "#00ff00"}}>
        <h1> Logged in User </h1> 
        <p>You can see Dashboard</p>
      </div>
       :
       <h1> Logged Out User </h1>}
       <button onClick={clickHandler}>Click</button>
       <input onChange={handleOnchange}/>
    </div>
  );
}

export default App;



