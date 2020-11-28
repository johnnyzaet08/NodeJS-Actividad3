import './App.css';
import React from 'react'
import Personajes from './Personajes';
export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Personajes></Personajes>
      </div>
    );
  }
}
