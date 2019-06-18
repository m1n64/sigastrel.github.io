import React from "react";
import './Add.css';
import {Modal, TextInput, Button} from 'react-materialize'
import axios from "axios";
import {saveUser} from "../functions/ServerApi";
class Add extends React.Component{

  constructor(props) {
    super(props);
    this.addSinper = this.addSinper.bind(this);
    this.state = {
      name: "",
    }
  }

  async addSinper() {
    // alert(this.state.name);
    this.state.name !== "" && await saveUser(this.state.name);
    this.setState({name: ""});
    //loh
  }

  render(){

    const trigger = <a className="btn-floating btn-large add-button btn modal-trigger" href="#modal1"
      onClick={()=>{}}
    >
      <i className="material-icons">add</i>
    </a>;

    const ButOnClose = <Button waves="red" modal="close" flat>Закрыть</Button>;

    return(
      <div className="add">
        <Modal className="modal" actions={ButOnClose} header="Добавить стрелка" trigger={trigger}>
          <TextInput className="input-field" label="Введите имя" data-length={15} value={this.state.name} onChange={(e)=>
              this.setState({name: e.target.value})
          }/>
          <a className="add-link" onClick={()=>this.addSinper()}>Добавить</a>
        </Modal>
      </div>
    );
  }
}


export default Add;
