import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signInAndSignUp/signInAndSignUp';

import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    
    <div className="App">

      <Header />

      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>

    </div>

  );
}

export default App;
