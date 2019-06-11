import React from "react";
import Counter from './Counter';
import Add from './Add';
import './CountPage.css';

function CountPage() {
  return (
    <div className="bg">
    <div className="container">
      <h4 className="list-text">СПИСОК СТРЕЛКОВ</h4>
    <Counter name={'Пользователь 1'}/>
    <Counter name={'Пользователь 2'}/>
    <Counter name={'Пользователь 3'}/>
    <Counter name={'Пользователь 3'}/>
    <Counter name={'Пользователь 3'}/>
    <Add/>
    </div>
    </div>
  );
}

export default CountPage;
