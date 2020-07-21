import React, {useState} from 'react';
import ExpandingList from './components/ExpandingList'
import WikiSearch from './components/WikiSearch'
const listItems = [
  {
    title: 'What are promises?',
    content: 'A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action%s eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.'
  }, 
  {
    title: 'React Lifecycle phases',
    content: 'Mounting, Updating, and Unmounting.'
  }, 
  {
    title: 'What are React Hooks?',
    content: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.'
  }
]

const App = () => {

  return (
    <div>
      <h1>Widgets</h1>
        {/* <ExpandingList listItems={listItems}/> */}
        <WikiSearch/>
    </div>
  );
}

export default App;

