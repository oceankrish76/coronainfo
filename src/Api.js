import React, { Component } from 'react';
//import { render } from "react-dom";
import './App.css';
import axios from 'axios';
import ColumnTwo from './ColumnTwo';
class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            opened: true,
            selected: '',
            message: ''
        };
        // since you're using this method in a callback, don't forget to
        // bind the this context
        //this.handleClick = this.handleClick.bind(this);
        this.el = document.createElement("div");
    }
    componentDidMount() {
        axios
            .get("https://covid19api.herokuapp.com/confirmed")
            .then(response => {
                const data = response.data.locations;
                this.setState({ data: data });
            })
            .catch(error => {
                if (error.response) {
                    // Request made and server responded
                    console.error(error.response.data);
                }
                else if (error.request) {
                    // The request was made but no response was received
                    console.error(error.request);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error', error.message);
                }
            });
    }

    render() {
        return (
            <div className="api">
                {this.state.data.map((item, index) => (
                    <InfoList key={index} {...item} />
                ))}

            </div>
        );
    }
}

const InfoList = (props) => {
    //const { Email, Surname, Name } = this.props.info;
    //const btn = document.querySelector('.countrynamesclass');
    let handleClick = (getcountrydata) => {
        //alert(getcountrycode)
        var coordlat = props.coordinates.latitude;
        var coordlong = props.coordinates.longitude;
        var last = Object.keys(getcountrydata).pop();
        document.querySelector('.displaycountrycode').textContent = last + ' ' + 'Infected: ' + getcountrydata[last] + ' ' + 'Coordinates: ' + 'latitude: ' + coordlat + ' longitude: ' + coordlong;
    }
    //const returnedhandleclick = handleClick(props.country_code);

    return (
        <>
            
                <p className="countrylist-p"><a className="countrynamesclass" id={props.country_code} onClick={() => handleClick(props.history)}>
                    <strong className="country">{props.country} </strong></a>
                </p>
                <p>Latest: {props.latest}</p>



        </>
    )
}

export default Api;
