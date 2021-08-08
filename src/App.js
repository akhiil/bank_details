import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import Header from './component/header';

const App = () => {


  return (
    <Router>
      <div>
        <Header />
      </div>

      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  )
}

export default App;
