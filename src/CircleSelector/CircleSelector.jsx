import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
  return (
    <div className='CircleSelector'>
      {props.btns.map((number) => 
        parseInt(props.selected) === number
        ? <button onClick={props.selectBtn} key={number} name={number} className='selected'> Select Circle {number} </button>
        : <button onClick={props.selectBtn} key={number} name={number}> Select Circle {number} </button>
      )}

    </div>
  );
}

export default CircleSelector;