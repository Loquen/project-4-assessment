import React from 'react';
import './Circles.css'

const Circles = (props) => {
  return (
    <div className='Circles'>
      {props.btns.map((number) => 
        parseInt(props.selected) === number
        ? <div onClick={props.selectBtn} key={number} name={number} className='selected'> {number} </div>
        : <div onClick={props.selectBtn} key={number} name={number}> {number} </div>
      )}
    </div>
  );
}

export default Circles