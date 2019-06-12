import React from 'react';
import CountPage from './components/CountPage';
import MainPage from './components/MainPage';
// import './App.css';
import {Switch, Route} from 'react-router-dom';
import RandomTokenGenerate from "./functions/RandomTokenGenerator";



class App extends React.Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem("token") == null || typeof localStorage.getItem("token") === "undefined")
            localStorage.setItem("token", RandomTokenGenerate());

        if (localStorage.getItem("old_token") == null || typeof localStorage.getItem("old_token") === "undefined")
            localStorage.setItem("old_token", localStorage.getItem("token"));
    }

  render() {
    return (
      <div>
        <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/CountPage' component={CountPage}/>
       </Switch>
        </div>
      );
  }
}

export default App;
