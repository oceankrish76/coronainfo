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
        var last = Object.keys(getcountrydata).pop();
        document.querySelector('.displaycountrycode').textContent = last + ': ' + getcountrydata[last];
    }
    //const returnedhandleclick = handleClick(props.country_code);

    return (
        <>
            <div className="row">
                <div className="col-left">
                <div className="column1">
                    <p className="eachcountry"><button className="countrynamesclass" id={props.country_code} onClick={() => handleClick(props.history)}>
                        <strong>{props.country}</strong></button>
                    </p>
                    </div>
                </div>
                <div className="column">
                    <p className="displaycountrycode"></p>
                </div>
            </div>
        </>
    )
}

export default Api;
