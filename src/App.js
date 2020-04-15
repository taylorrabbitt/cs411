import React, { useState } from 'react';
import './App.css';
import LocationForm from "./components/LocationForm";
import Results from "./components/Results";

import useData from './hooks/useData';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  let results = useData(searchQuery);
  let message;
  if (searchQuery && !results){
    message = "Invalid search.  Please check the spelling and try again."
  } 
  return (
    <div>
      <header>Virus Tracker App</header>
      <LocationForm callback={q => setSearchQuery(q)} />
      <Results data={results} message={message}/>
    </div>
  );
}

export default App;
