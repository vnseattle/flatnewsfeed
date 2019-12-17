import React from 'react';
import Posts from './components/posts/';
import Menu from './components/menu/';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
      <Menu />
  );
}

export default App;
