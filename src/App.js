import React, { Component } from 'react';
import webtorrent from 'webtorrent';
import logo from './logo.svg';
import './App.css';
import ArrayRender from './components/arrayrendering';
import Calculator from './components/temperaturecalculator';
import FilterProductTable from './components/searchfilter';
import TorrentDownload from './components/webtorrent';



const Welcome = (props) =>
   <h1>Hello, {props.name} {props.lastName}!</h1>;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
  setInterval(this.updateTime.bind(this,this.setState.bind(this)), 1000);
 }
  render() {
    return (
      <div>
        <h2>The time is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
  updateTime(setState){
    setState({
      date:new Date()
    });
  }
}

class ButtonTest extends React.Component{
  constructor(props){
    super(props);
    this.state = {onOffValue : true};
    this.toggleButtonValue = this.toggleButtonValue.bind(this);
  }

  toggleButtonValue(){
    this.setState(prevState=>({onOffValue: !prevState.onOffValue}));
  }

  render(){
    return(
      <div>
        <label>Button : </label>
        <button onClick={this.toggleButtonValue}>
          {this.state.onOffValue? 'ON':'OFF'}
        </button>
      </div>
      );
  }
}

class InputTest extends React.Component{
  constructor(props){
    super(props);
    this.state = {value : ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <div>
        <label>
          Enter Text :
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/><br/>
        <InputValueDisplay bindedData={this.state.value} />
      </div>
    );
  }
}

const InputValueDisplay = (props) => {
  return (
    <div>
      <label>ONE WAY DATA BINDING : </label>
      {props.bindedData != "" && <strong>{props.bindedData}</strong>}
      {props.bindedData == "" && <span>Your text will be updated here</span>}
    </div>
 )
}


const App = () =>

 <div className="App">
   <div className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h2>Welcome to React Playground</h2>
   </div>
   <Welcome className="App-intro" id="intro" name="Bhuvan" lastName="Malik" />
   <div>
     <Clock />
   </div>
   <div className="flex-container">
     <div className="button">
       <ButtonTest />
     </div>
     <div className="array">
       <ArrayRender />
     </div>
     <div className="data-biding">
       <InputTest />
     </div>
     <div className="calculator">
       <Calculator />
     </div>
     <div className="searchFilter">
       <FilterProductTable />
     </div>
   </div>
   <div className="flex-container1">
     <div className="searchFilter">
       <TorrentDownload />
     </div>
   </div>
 </div>

 {/* <div className="searchFilter">
   <FilterProductTable />
 </div> */}


export default App;
