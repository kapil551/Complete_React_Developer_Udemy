import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/shop';

import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    
    <div className="App">

      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

    </div>

  );
}

export default App;
