import React from 'react';
import CountPage from './components/CountPage';
import MainPage from './components/MainPage';
import './App.css';
import {Switch, Route} from 'react-router-dom';



class App extends React.Component {
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
