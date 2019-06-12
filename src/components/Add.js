import React from "react";
import './Add.css';

import axios from "axios";
class Add extends React.Component{

  constructor(props) {
    super(props);
    this.addSinper = this.addSinper.bind(this);
  }

  async addSinper() {
    await axios.post("https://sigarretsniper.brickweb.ru/saveUser.php", {token: localStorage.getItem("token"), name: "Test1"})
        .then((res)=>{});
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
