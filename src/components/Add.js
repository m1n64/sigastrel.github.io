import React from "react";
import './Add.css';

import axios from "axios";

import {saveUser} from "../functions/ServerApi";

class Add extends React.Component{

  constructor(props) {
    super(props);
    this.addSinper = this.addSinper.bind(this);
  }

  async addSinper() {
    await saveUser("Test2");
    // this.props.redrawSnipers();
    //loh
  }

  render(){
    return(
      <div className="add">
        <a className="btn-floating btn-large add-button"
          onClick={()=> this.addSinper()}
        >
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}


export default Add;
