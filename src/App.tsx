import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios').default;
import SearchPage from "./components/SearchPage";

import { PostsList } from './posts/PostsList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

//react.fragment gjør at hvis en komponent har 
//fler elementer i seg, kan vi vise disse uten at det lages
//ekstra noder til DOMen

function App() {
  const [data, setData] = useState("")
  const [dat, setDat] = useState(0)

  axios.get('http://it2810-10.idi.ntnu.no:5000/api/cat').then((res: any) => {
    console.log(res);
    setData(res.data[dat].name)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
