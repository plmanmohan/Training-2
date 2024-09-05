import { useState } from "react";
import "./App.css";
import UserForm from "./components/ReusableForm/UserForm";
import FeedbackForm from "./components/ReusableForm/FeedbackForm";
import ProductForm from "./components/ReusableForm/ProductForm";

function App() {
  
  return (
    <div>
      <h1>Welcome App</h1>
      <UserForm/>
      <FeedbackForm/>
      <ProductForm/>
    </div>
  );
}

export default App;



