import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RenderToBody from '../../components/RenderToBody'
import TabMenu from '../../components/TabMenu';
import TopBar from './components/TopBar';
import Slide from './components/Slide';
import MovieItem from './components/MovieItem';

import CityLayer from './components/CityLayer';
import request from '../../helpers/request';
import './Index.css';
import { async } from 'rxjs/internal/scheduler/async';
// import axios from 'axios';

const propTypes = {
    onClose:PropTypes.func,
    onSelect:PropTypes.func
};
let page = 2; 
var timer = null;  
var lock = true;
class Home extends Component {

    state = {
        city:'',//当前城市
        poster:[],//slide海报
        movie:[],//当前热映电影，
        cityLayerVisible:false

    }
    showCityLayer=()=>{
        this.setState({
            cityLayerVisible:true
        })
    }
    hideCityLayer = ()=>{
        this.setState({
            cityLayerVisible:false
        })
    }
    onChangeCity = (city)=>{
        this.setState({
            city
        })
        this.hideCityLayer();
    }
    componentWillMount() {
        this.getData();
    }
    getData = async()=>{
        const  data = await request('/index');
        // console.log(data)
        const {city, poster,movie} = data;
        this.setState({
            city,
            poster,
            movie:movie.slice(0,6)
        })
    }
    getmovie=(page)=>{
        // console.log(page);
        let url = 'http://www.putaoshuxia.club:8081/indexmovie?page='+page;
        fetch(url).then(response => response.json()).then((movie)=>{
                this.setState({
                    movie
                })
            })
    }
    componentDidMount() {
        
        window.addEventListener('scroll',this.bindScroll)
    }
    proxy = ()=>{
        this.getmovie(page)
        page++;
    }
    bindScroll = (e) =>{
        
        let sH = e.srcElement.scrollingElement.scrollHeight;//body总高度
        let sT = e.srcElement.scrollingElement.scrollTop;//滑动的高度
        let cH = e.srcElement.scrollingElement.clientHeight//可视高度
        
        if(sH-100-cH<sT){ 
            clearTimeout(timer);
            timer = setTimeout(()=>{this.proxy()},100);
        }
    }
    render() {
        const { city , poster, movie, cityLayerVisible} = this.state;
        return (
            <div className="home">
                <TopBar city={city}  showCityLayer={this.showCityLayer}/>
                <div className="home__slide">
                    <div className="home__slideWrap">
                        <Slide data={poster}/>
                    </div>
                </div>
                <ul className="home__content">
                    {
                        movie.map(item=>(
                            <li key={item.name}><Link to="/detail"><MovieItem data={item} /></Link></li>
                        ))
                    }
                    {/* <li><MovieItem /></li>
                    <li><MovieItem /></li>
                    <li><MovieItem /></li>
                    <li><MovieItem /></li>
                    <li><MovieItem /></li>
                    <li><MovieItem /></li>
                    <li><MovieItem /></li>
                    <li><MovieItem /></li> */}
                </ul>
                <TabMenu current='movie' /> 
                {cityLayerVisible&&<RenderToBody><CityLayer onClose={this.hideCityLayer} onSelect = {this.onChangeCity}/></RenderToBody>}
            </div>
        );
    }
}


Home.propTypes = propTypes;


export default Home;

