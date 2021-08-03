import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors default path="/" />
        <CreateAuthor path="/authors/new" />
        <EditAuthor path="/authors/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
