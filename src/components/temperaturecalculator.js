import React, {Component} from 'react';
import '../App.css';

const unitNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = (props) => {
  if(isNaN(props.celsius))
  {return <h3>I wish you had some brains</h3>;}
  if (props.celsius >= 100)
    {return <h3>Water boils</h3>;}
  return <h3>Water doesn't boil</h3>;
}

const TempInput = props => {
    return(
      <div>
        <p>Enter temperature in {unitNames[props.unit]} : </p>
        <input value={props.value} onChange={props.onChange} />
      </div>
    )
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      unit: ''
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
  }

  render(){
    const celsius = this.state.unit === 'f' ? tryConvert(this.state.value, toCelsius) : this.state.value;
    const fahrenheit = this.state.unit === 'c' ? tryConvert(this.state.value, toFahrenheit) : this.state.value;
    return(
        <div>
          <TempInput unit="c" value={celsius} onChange={this.handleCelsiusChange}/>
          <TempInput unit="f" value={fahrenheit} onChange={this.handleFahrenheitChange}/>
          <BoilingVerdict celsius={this.state.value}/>
        </div>
      )
    }

    handleCelsiusChange(event){
      this.setState({value : event.target.value, unit : 'c'});
    }
    handleFahrenheitChange(event){
      this.setState({value : event.target.value, unit : 'f'});
    }
}


export default Calculator;
