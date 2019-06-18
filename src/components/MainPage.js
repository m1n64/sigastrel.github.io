import React from "react";
import './MainPage.css';
import {Link} from 'react-router-dom';

function MainPage(){
  return(
    <div className="bg_2">
      <div className="container">
      <h4 className="disclamer">Внимание! Курение вредит вашему здоровью!</h4>

        <div className="row content">

      <div className="col s12 m6">
        <img src="" alt=""/>
      </div>

      <div className="col s12 m6">
        <h2 className="name">СИЖКАСТРЕЛ</h2>
        <p className="discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna metus, lobortis at aliquet ac, commodo eget lorem. Quisque suscipit leo vitae justo hendrerit varius. Cras sed libero quis massa tincidunt condimentum vitae nec nibh. Fusce eu lorem ac dui maximus ornare. Curabitur viverra sollicitudin lectus eget ultricies</p>

        <Link to='/CountPage' className="link">Попробовать</Link>
          </div>
        </div>

      </div>
    </div>

  );
}

export default MainPage;
