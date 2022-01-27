import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signInAndSignUp/signInAndSignUp';

import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  // firebase user authentication
  useEffect(
    () => {

      auth.onAuthStateChanged(user => {
        
        console.log(user);
        setCurrentUser(user);
      })

    }
  )

  return (
    
    <div className="App">

      <Header currentUser={currentUser} />

      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>

    </div>

  );
}

export default App;
