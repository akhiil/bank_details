import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from 'axios';
import HomeScreen from "./screens/homeScreen";
import BankDetail from './screens/bankdetailScreen'
import Header from './component/header';

const App = () => {


  return (
    <Router>
      <div>
        <Header />
      </div>

      <Switch>
        <Route exact path="/">
          <Redirect to="/all_banks" />
        </Route>
        <Route exact path="/all_banks" component={HomeScreen} />
        <Route path="/bank_details" component={BankDetail} />
      </Switch>
    </Router>
  )
}

export default App;
