import React from "react";
import './Add.css';
import {Modal, TextInput, Button} from 'react-materialize'
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

    const trigger = <a className="btn-floating btn-large add-button btn modal-trigger" href="#modal1"
      onClick={()=>{}}
    >
      <i className="material-icons">add</i>
    </a>;

    const ButOnClose = <Button waves="red" modal="close" flat>Закрыть</Button>;

    return(
      <div className="add">
        <Modal className="modal" actions={ButOnClose} header="Добавить стрелка" trigger={trigger}>
          <TextInput className="input-field" label="Введите имя" data-length={15} />
     <a className="add-link">Добавить</a>
  </Modal>
      </div>
    );
  }
}


export default Add;
