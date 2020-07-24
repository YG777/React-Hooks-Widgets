import React, { useState } from "react";
import ExpandingList from "./components/ExpandingList";
import WikiSearch from "./components/WikiSearch";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from './components/Header';

//Expanding List______________
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

//dropdown________________________________
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
//______EXPANDING_LIST,_DROPDOWN_AND_SEARCH_HERE_____________
// const App = () => {
//   const [selected, setSelected] = useState(dropDownOptions[0]);
//   const [showDropDown, setShowDropDown] = useState(false);
//   return (
//     <div>
//       <h1>Widgets</h1>
//       {/* <ExpandingList listItems={listItems}/> */}
//       {/* <WikiSearch/> */}
//       <button
//       onClick={()=>setShowDropDown(!showDropDown)}
//       >Toggle</button>
//       {showDropDown?
//     <DropDown
//     selected={selected}
//     dropDownOptions={dropDownOptions}
//     onSelectedChange={setSelected}
//   />:null
//       }

//     </div>
//   );
// };
// _________________________________________________

//----Translate widget----------------
// const App = () => {

//   return (
//     <div>
//       <Translate/>
//     </div>
//   );
// };
// export default App;
//-------------------------------------

//__ALL_WIDGETS_WITH_NAVIGATION________
const App = () => {
  const [selected, setSelected] = useState(dropDownOptions[0]);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div>
      <Header/>
      <Route path="/">
        <ExpandingList listItems={listItems} />
      </Route>
      <Route path="/search">
        <WikiSearch />
      </Route>
      <Route path="/dropdown">
        <DropDown
          selected={selected}
          dropDownOptions={dropDownOptions}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
