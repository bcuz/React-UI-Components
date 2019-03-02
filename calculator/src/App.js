import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

let keys = [String.fromCharCode(247), 7, 8, 9, "x", 4, 5, 6, String.fromCharCode(8212),  1, 2, 3, "+"]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log(e.target.textContent);
    
    let text = e.target.textContent
    let getInt = parseInt(e.target.textContent)
    
    if (text === 'clear'){
      this.setState({ total: '' })
    } else if (isNaN(getInt) !== true) {
      this.setState({ total: this.state.total + String(getInt) })        
    }

  }

  render() {
    return (
      <div className="main">
      <CalculatorDisplay total={this.state.total}/>
        <ActionButton handleClick={this.handleClick} text='clear' />
        {keys.map(key => {
          return <NumberButton 
          handleClick={this.handleClick}
          buttonStyle={(typeof key === 'number') ? 'num' : 'symbol'} 
          text={key} />
        })}
        <ActionButton handleClick={this.handleClick} text='0' />
        <NumberButton buttonStyle='symbol' text='=' />
      </div>
    );
  }
};

export default App;
