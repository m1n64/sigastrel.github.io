import React, {PropTypes} from "react";
import Counter from './Counter';
import Add from './Add';
import './CountPage.css';
// import './Add.css';

import axios from "axios";

import {saveUser, removeUser, updateUser} from "../functions/ServerApi";

class CountPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      Snipers: [],
    };

    this.addSinper = this.addSinper.bind(this);
  }

  async componentDidMount() {
      await axios.post("https://sigarretsniper.brickweb.ru/getUsers.php", {token: localStorage.getItem("token")})
          .then((res)=>{
              if (res.data.toString().trim() !== "no_data_in_table") {
                  this.setState({Snipers: res.data});
              } else this.setState({Snipers: []});
          });
  }

  async addSinper() {
        await saveUser("Test");
        // this.componentWillMount();
  }

  redrawSnipers = ()=>{
      this.componentDidMount();
  };

  incSigar = (index, num, id)=>{

      updateUser(id, ++num);
  };

  decSigar = (index, num, id)=>{
      num > 0 ? updateUser(id, --num) : removeUser(id);
  };

  render() {
    return (
        <div className="bg">
          <div className="container">
            <h4 className="list-text">СПИСОК СТРЕЛКОВ</h4>
            {/*<Counter name={'Пользователь 1'}/>*/}
              {this.state.Snipers.map((el, i)=>
                  <Counter key={i}
                        id={el.sigars_id}
                        name={el.sigars_name}
                        num={el.sigars_num}
                        index={i}

                        incSigar={this.incSigar}
                        decSigar={this.decSigar}
                    />
                )}
                {/*<Counter snipers={this.state.Snipers}/>*/}
                <Add redrawSniper={this.redrawSnipers()}/>
          </div>
        </div>
    );
  }
}

export default CountPage;
