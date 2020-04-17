import React, { Component } from 'react';

class InfoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCountryCode: null,
            lat: null,
            history: ''

        };
    }
    handleClick = (thisprops) => {
        const totalconfirmed = thisprops.TotalConfirmed;
        //console.log(thisprops)
        document.querySelector('.displaycountrycode').textContent = 'Total Confirmed: ' + totalconfirmed;
    };

    render() {
        return (
            <>
                <span>
                    <p><a className="countrynames-a" id={this.props.country_code} onClick={() => this.handleClick(this.props)}>
                        <strong>{this.props.Country}</strong>
                    </a>
                    </p>
                    <p>Total Infections: {this.props.TotalConfirmed}</p>
                    <p className="countrylist-p">Latest: {this.props.Global}</p>
                </span>
            </>
        );
    }
}
export default InfoList;