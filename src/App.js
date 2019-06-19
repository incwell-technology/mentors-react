import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </Provider>
  );
}

const Home = () => {
return(
  <div>
  <p>Home</p>
</div>
)
}

const Login = () => {
  return(
    <div>
    <p>Login</p>
  </div>
  )
}

export default App;
