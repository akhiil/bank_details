import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import FavouriteScreen from './screens/favouriteScreen';
import IndividualScreen from './screens/individualBank';
import Header from './component/header';

const App = () => {


  return (
    <Router>
      <div>
        <Header />
      </div>

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/favourites" component={FavouriteScreen} />
        <Route path="/individual" component={IndividualScreen} />
      </Switch>
    </Router>
  )
}

export default App;
