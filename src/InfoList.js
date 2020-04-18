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
        const totaldeaths = thisprops.TotalDeaths;
        
        //console.log(thisprops)
        document.querySelector('.displaycountrycode').textContent = 'Confirmed: ' + totalconfirmed + ' | ' + 'Deaths: ' + totaldeaths;
    };

    render() {
        window.onload = function () {
            var a = document.getElementsByClassName("countrynames-a");
            var all_ids = [];

            for (var i = 0; i < a.length; i++) {
                var id = a[i].id;
                all_ids.push(id);
                document.getElementById(id).addEventListener("click", function () {
                    console.log("countryid " + this.id);
                    document.getElementById(all_ids[clicked_count]).style.backgroundColor = "#0054a3"; 
                    document.getElementById(all_ids[clicked_count]).style.color = "#ffffff"; 
                    document.getElementById(all_ids[clicked_count]).style.padding = ".3em"; 

    

                });
            }
            var clicked_count = 0; 
            var interval_id = setInterval(function(){
            if (clicked_count >= all_ids.length){
                clearInterval(interval_id); 
                }
                document.getElementById(all_ids[clicked_count]).click(); 
            clicked_count++; 
            }, 5000);
                
        }
        return (
            <>

                <span>
                    <p><a className="countrynames-a" id={this.props.CountryCode} onClick={() => this.handleClick(this.props, this)}>
                        <strong className="country-name">{this.props.Country}</strong>
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