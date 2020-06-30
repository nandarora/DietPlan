import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Clientnav from './containers/ClientNav';
import Breakfast from './containers/breakfast';
import Lunch from './containers/lunch';
import Dinner from './containers/dinner';
import Mon from './containers/mon';
import Tue from './containers/tue';
import Wed from './containers/wed';
import Thu from './containers/thu';
import Fri from './containers/fri';
import Sat from './containers/sat';
import Sun from './containers/sun';
import Weekly from './containers/weekly';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <Clientnav />
        <BrowserRouter>
        <Switch>
        
        <Route exact path='/breakfast' component={Breakfast} />
        <Route exact path='/lunch' component={Lunch} />
        <Route exact path='/dinner' component={Dinner} />
        <Route exact path='/mon' component={Mon} />
        <Route exact path='/tue' component={Tue} />
        <Route exact path='/wed' component={Wed} />
        <Route exact path='/thu' component={Thu} />
        <Route exact path='/fri' component={Fri} />
        <Route exact path='/sat' component={Sat} />
        <Route exact path='/sun' component={Sun} />
        <Route exact path='/weekly' component={Weekly} />
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
