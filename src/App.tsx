import React, { Component, useState } from 'react';
import Pie from './Component/Piechart/Chart';
import GenericPie from './Component/GenericPieChart';
// import * as logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

var transactionaltdata = [{value:60, name:'Success'}, {value:40, name:'Failure'}, {value:20, name:'Intermediate'}, {value:25, name:'Average'}]
// var chartdata2 = [{value:90, name:'Success'}, {value:10, name:'Failure'}, {value:50, name:'Intermediate'}, {value:75, name:'Average'}]
var credentialdata = [{value:80, name:'API'}, {value:20, name:'NATS'}]
var transactionalcolor = ['green','red', 'pink', 'cyan']
var credentialcolor = ['red', 'blue']
var transactionaltext = 'Transactional Status'
var credentialtext = 'Credentials'


function App() {

  const [data, setData] = useState(transactionaltdata);
  const [color, setColor] = useState(transactionalcolor);
  const [title, setText] = useState(transactionaltext );
  const onCLickHandler = () =>{
    setData(transactionaltdata);
    setColor(transactionalcolor);
    setText(transactionaltext);
  }
  const onCLickHandler1 = () =>{
    setData(credentialdata);
    setColor(credentialcolor);
    setText(credentialtext);
  }

    return (
      <div className="App">
        <GenericPie title={title} data={data} color={color} />
        <button onClick={onCLickHandler}>Change to Transactional Pie Chart</button>
        <button onClick={onCLickHandler1}>Change to Credential Pie Chart</button>
        {/* <GenericPie title="Credentials" subtext="Ready" data={data} color={color} /> */}
        {/* <button onClick={onCLickHandler}>
            Hello
        </button> */}
      </div>
    );
  // }
}

export default App;

