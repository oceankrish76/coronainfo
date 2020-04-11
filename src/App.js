import React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from './PrimarySearchAppBar';
// import Map from './Map';
//import VerticalTabs from './VerticalTabs';
import Api from './Api';
import ColumnTwo from './ColumnTwo';

const Coder = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

class App extends Component {
  render() {
    return (
      <>
        <PrimarySearchAppBar />
        <Coder name="Current Situation" status="online" />
        <Api />
        <div className="column">
          <p>Loading</p>
        </div>
      </>
    );
  }
}
export default App;
