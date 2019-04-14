import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import './Index.css';

const propTypes = {
    
};


class Home extends Component {
    showCityLayer=()=>{
        console.log('showCityLayer');
    }
    render() {
        return (
            <div className="home">
                <TopBar city="杭州"  showCityLayer={this.showCityLayer}/>
                首页demo1
            </div>
        );
    }
}


Home.propTypes = propTypes;


export default Home;

