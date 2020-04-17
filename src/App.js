import React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from './PrimarySearchAppBar';
// import Map from './Map';
//import VerticalTabs from './VerticalTabs';
import Api from './Api';
import ColumnTwo from './ColumnTwo';

const Coder = (props) => {
  return (
    <div className="currentsituation-bar">
      <h1>{props.name}</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <>
        <PrimarySearchAppBar />
        <Coder name="Current Situation" status="online" />
        <div className="column1 eachcountry">
          <Api />
        </div>
        <div className="column-map">
          <ColumnTwo color="Click on country to see the details" />
        </div>
        
      </>
    );
  }
}
export default App;
