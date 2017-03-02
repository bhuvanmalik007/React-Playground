import React, { Component } from 'react';
import '../App.css';

const stringArray = ["this","was","an","array"];
const convertedArray = stringArray.map((word)=><span>{word} </span>);

const ArrayRender = () =>
{
  return (
      <div>{convertedArray}</div>
    )
}

export default ArrayRender;
