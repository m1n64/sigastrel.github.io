import React, {PropTypes} from "react";
import './Counter.css'
import {CSSTransition} from 'react-transition-group';

import axios from 'axios';

class Counter extends React.Component{
  constructor(props){
    super(props);

  };


  render() {
        var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
    return(
      <div>
        {/*{this.props.snipers.map((el, index)=>*/}
      <ReactCSSTransitionGroup transitionName = "example"
         transitionAppear = {true} transitionAppearTimeout = {900}
         transitionEnter = {false} transitionLeave = {false}  key={this.props.id}>



            <div className="content-counter">
              <div className="main-counter">
                <div className="user-image"></div>

                <div className="user-name">
                  <p>{this.props.name}</p>
                </div>
                  <button className="count-but"
                    onClick={()=>{
                      this.props.decSigar(this.props.index, this.props.num, this.props.id);
                    }}>
                    -</button>
                       <div className="counter">{this.props.num}</div>
                  <button className="count-but"
                    onClick={()=>{
                      this.props.incSigar(this.props.index, this.props.num, this.props.id);
                    }}>
                    +</button>
              </div>

        </div>

      </ReactCSSTransitionGroup>
        {/*)}*/}
      </div>
    );
  }
}


export default Counter;
