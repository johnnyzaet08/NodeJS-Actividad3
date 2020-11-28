import './App.css';
import React from 'react'
export default class Personajes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        let data = this.state.data;
        let personajes = []
        for (let i = 0; i < data.length; i++) {
            personajes.push(<div>{data[i].name}</div>)
        }
        return (
        <div>{personajes}</div>
        );
    }
    
    loadData(){
        let response = await fetch("https://swapi.dev/api/people/");
        let parseResponse = await response.json();
        this.setState({
            data: parseResponse.results
        })
    }
}