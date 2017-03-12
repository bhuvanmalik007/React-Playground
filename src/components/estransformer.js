import React, { Component } from 'react';
import '../App.css';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class MainTransformer extends React.Component{
  constructor(props){
    super(props);
    this.state={es5:'',es6:''};
    this.onChange = this.onChange.bind(this);
  }
  onChange(code){
    try{
      this.setState({es6: code, es5: window.Babel.transform(code, {presets:['es2015']}).code});
    }
    catch(e){
      this.setState({es6:code});
    }
  }
  render(){return(
    <div>
      <div className="flex-container">
        <label className="flex-item transpilerStrip">Transpile ES6 to ES5!</label>
      </div>
      <div className="flex-ace-container">
        <AceEditor
          className="aceEditor"
          width="100%"
          mode="javascript"
          theme="monokai"
          value={this.state.es6}
          onChange={this.onChange}
          name="es6"
          editorProps={{$blockScrolling: true}}
        />
        <AceEditor
          className="aceEditor"
          width="100%"
          mode="javascript"
          theme="monokai"
          value={this.state.es5}
          name="es5"
          readOnly={true}
          editorProps={{$blockScrolling: true}}
        />
      </div>
    </div>
    )
  }
}

export default MainTransformer;
