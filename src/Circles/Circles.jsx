import React from 'react';
import './Circles.css'

const Circles = (props) => {
  return (
    <div className='Circles'>
      {props.btns.map((number) => 
        <div onClick={props.selectBtn} key={number} name={number} className={parseInt(props.selected) === number ? 'selected' : ''}> {number} </div>
      )}
    </div>
  );
}

export default Circles