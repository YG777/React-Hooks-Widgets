import React, { useState } from "react";
import ExpandingList from "./components/ExpandingList";
import WikiSearch from "./components/WikiSearch";
import DropDown from "./components/DropDown";

const listItems = [
  {
    title: "What are promises?",
    content:
      "A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action%s eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.",
  },
  {
    title: "React Lifecycle phases",
    content: "Mounting, Updating, and Unmounting.",
  },
  {
    title: "What are React Hooks?",
    content:
      "Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.",
  },
];

const dropDownOptions = [
  {
    label: "Red color",
    value: "red",
  },
  {
    label: "Green color",
    value: "green",
  },
  {
    label: "Orange color",
    value: "Orange",
  },
];
const App = () => {
  const [selected, setSelected] = useState(dropDownOptions[0]);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div>
      <h1>Widgets</h1>
      {/* <ExpandingList listItems={listItems}/> */}
      {/* <WikiSearch/> */}
      <button 
      onClick={()=>setShowDropDown(!showDropDown)}
      >Toggle</button>
      {showDropDown?
    <DropDown
    selected={selected}
    dropDownOptions={dropDownOptions}
    onSelectedChange={setSelected}
  />:null
      }
  
    </div>
  );
};

export default App;
