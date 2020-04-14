import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ColumnTwo from './ColumnTwo';
const mapbox_token = 'pk.eyJ1Ijoib2NlYW5rcmlzaDc2IiwiYSI6ImNqeWpnczRhazAzYnAzbXFoNm44bTlsM3EifQ.ooAp0kr_T2KY_KyhV549TQ';
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
class InfoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCountryCode: null,
        };
    }
    //        const { Email, Surname, Name } = this.props.info;
    handleClick = (getcountrycode) => {
        this.setState({ currentCountryCode: getcountrycode });
    };

    render() {
        const { currentCountryCode } = this.state;
        return (
            <>
                <p className="eachcountry">
                    <button
                        className="countrynamesclass"
                        id={this.props.country_code}
                        onClick={() => this.handleClick(this.props.country_code)}
                    >
                        <strong>{this.props.country}</strong>
                    </button>
                </p>
                <p>Country code is: {currentCountryCode}</p>
            </>
        );
    }
}
export default Api;

/*
const InfoList = (props) => {
    let handleClick = (getcountrydata) => {
        var coordlat = props.coordinates.latitude;
        var coordlong = props.coordinates.longitude;
        var last = Object.keys(getcountrydata).pop();
        document.querySelector('.displaycountrycode').textContent = last + ' ' + 'Infected: ' + getcountrydata[last] + ' ' + 'Coordinates: ' + 'latitude: ' + coordlat + ' longitude: ' + coordlong;

    }
    return (
        <>
            <span>
                <p><a className="countrynames-a" id={props.country_code} onClick={() => handleClick(props.history)}>
                    <strong className="country">{props.country} </strong></a>
                </p>
                <p className="countrylist-p">Latest: {props.latest}</p>
            </span>
        </>
    )
}

export default Api;
 */