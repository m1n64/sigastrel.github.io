import React from "react";
import './Counter.css'
import {CSSTransition} from 'react-transition-group';

import axios from 'axios';

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      Snipers: [],
    };

  };

  updateUser = (id, num)=>{
    axios.post("https://sigarretsniper.brickweb.ru/updateUser.php", {id: id, token: localStorage.getItem("token"), num: num})
        .then();
  };

  render() {
        var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
    return(
      <div>
      <ReactCSSTransitionGroup transitionName = "example"
         transitionAppear = {true} transitionAppearTimeout = {900}
         transitionEnter = {false} transitionLeave = {false}>

        {this.props.snipers.map((el, index)=>

            <div className="content-counter">
              <div className="main-counter">
                <div className="user-image"></div>

                <div className="user-name">
                  <p>{el.sigars_name}</p>
                </div>
                  <button className="count-but"
                    onClick={()=>{
                        this.setState({
                          Snipers: [...this.state.Snipers.slice(0, index, el.sigars_num > 0 ? el.sigars_num-- : 0), ...this.state.Snipers.slice(index)],
                        });
                        this.updateUser(el.sigars_id, el.sigars_num);
                    }}>
                    -</button>
                       <div className="counter">{el.sigars_num}</div>
                  <button className="count-but"
                    onClick={()=>{
                        this.setState({
                          Snipers: [...this.state.Snipers.slice(0, index, el.sigars_num++), ...this.state.Snipers.slice(index)],
                        });
                        this.updateUser(el.sigars_id, el.sigars_num);
                    }}>
                    +</button>
              </div>

        </div>
        )}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}


export default Counter;
