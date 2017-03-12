import React from 'react';
import '../App.css';

const stringArray = ["this","was","an","array"];
const convertedArray = stringArray.map((word, index)=><span key={index}>{word} </span>);

const ArrayRender = () =>{
  return (
      <div>{convertedArray}</div>
    )
}

export default ArrayRender;
