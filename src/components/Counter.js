import React from "react";
import './Counter.css'
import {CSSTransition} from 'react-transition-group';

class Counter extends React.Component{
  constructor(props){
    super(props);
    let ci = Number(localStorage.getItem('it'));
    this.state ={
      count: ci
    };
  }

  inc = () => {
    this.setState({count:this.state.count + 1});
    localStorage.setItem('it', String(this.state.count +1));
  }

  dec = () =>{
    if (this.state.count > 0 )
    {
      this.setState({count: this.state.count -1});
      localStorage.setItem('it', String(this.state.count -1 ));
    }
    // window.unload(localStorage.setItem('it', this.state.count));
  }
  render(){
        var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
    return(
      <div>
      <ReactCSSTransitionGroup transitionName = "example"
         transitionAppear = {true} transitionAppearTimeout = {900}
         transitionEnter = {false} transitionLeave = {false}>

            <div className="content-counter">
              <div className="main-counter">
                <div className="user-image"></div>

                <div className="user-name">
                  <p>{this.props.name}</p>
                </div>

                  <button className="count-but"
                    onClick={()=> this.dec()}>
                    -</button>
                       <div className="counter">{this.state.count}</div>
                  <button className="count-but"
                    onClick={()=> this.inc()}>
                    +</button>
              </div>

      </div>
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}


export default Counter;
