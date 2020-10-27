import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchPage from "./components/SearchPage";
const axios = require('axios').default;

//react.fragment gjør at hvis en komponent har 
//fler elementer i seg, kan vi vise disse uten at det lages
//ekstra noder til DOMen

function App() {
  const [data, setData] = useState("")
  const [dat, setDat] = useState(0)

  axios.get('http://it2810-10.idi.ntnu.no:5000/api/cat').then((res: any) => {
    console.log(res);
    setData(res.data[dat].cat.cat_name)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setDat(dat+1)}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <img src={data}/>
        {data}

        <SearchPage />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
