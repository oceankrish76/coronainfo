import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoib2NlYW5rcmlzaDc2IiwiYSI6ImNqeWpnczRhazAzYnAzbXFoNm44bTlsM3EifQ.ooAp0kr_T2KY_KyhV549TQ';
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

class ColumnTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2,
            worldwideinfected: 434343434,
            worldwidedeaths: 32322,
            worldwiderecovered: 232232222
        };
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }
    render() {
    return (
        <>
            <div>
                <div className='sidebarStyle'>
                    <div>Worldwide Infected: {this.state.worldwideinfected} | Deaths: {this.state.worldwidedeaths} | Recovered: {this.state.worldwiderecovered}</div>
                        <p className="displaycountrycode"></p>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        </>
    );
    }
}
export default ColumnTwo;
