import React from 'react';
import logo from './logo.svg';
import './App.css';
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <SearchPage />

        <React.Fragment>
                <PostsList />
          </React.Fragment>

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
