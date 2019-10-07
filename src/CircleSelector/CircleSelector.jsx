import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
  return (
    <div className='CircleSelector'>
      {props.btns.map((number) => 
        <button onClick={props.selectBtn} key={number} name={number} className={parseInt(props.selected) === number ? 'selected' : ''}> Select Circle {number} </button>
      )}

    </div>
  );
}

export default CircleSelector;