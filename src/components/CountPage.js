import React from "react";
import Counter from './Counter';
// import Add from './Add';
import './CountPage.css';
import './Add.css';

import axios from "axios";

class CountPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      Snipers: [],
    };

    this.addSinper = this.addSinper.bind(this);
  }

  async componentWillMount() {
    await axios.post("https://sigarretsniper.brickweb.ru/getUsers.php", {token: localStorage.getItem("token")})
        .then((res)=>{
          if (res.data.toString().trim() !== "no_data_in_table") {
              this.setState({Snipers: res.data})
          }
        });
  }

  async addSinper() {
        await axios.post("https://sigarretsniper.brickweb.ru/saveUser.php", {token: localStorage.getItem("token"), name: "Test1"})
            .then((res)=>{});

        this.componentWillMount();
  }

  render() {
    return (
        <div className="bg">
          <div className="container">
            <h4 className="list-text">СПИСОК СТРЕЛКОВ</h4>
            {/*<Counter name={'Пользователь 1'}/>*/}
              {/*{this.state.Snipers.map((el)=>*/}
                  {/*<Counter*/}
                        {/*id={el.sigars_id}*/}
                        {/*name={el.sigars_name}*/}
                    {/*/>*/}
                {/*)}*/}
                <Counter snipers={this.state.Snipers}/>
              <div className="add">
                  <a className="btn-floating btn-large add-button"
                     onClick={()=> this.addSinper()}
                  >
                      <i className="material-icons">add</i>
                  </a>
              </div>
          </div>
        </div>
    );
  }
}

export default CountPage;
