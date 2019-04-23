import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from '../../../helpers/request';
import './CityLayer.css'

const propTypes = {
  onScroll:PropTypes.func
};


class CityLayer extends Component {
  state = {
    hot:[],
    all:{}
  }
  componentWillMount(){
    this.getData();
  }
  getData = async ()=>{
    const data =  await request('/city');
    const{hot, all} = data;
    this.setState({
      hot,all
    })
  }
  



  render() {
    const { onClose, onSelect, onScroll} = this.props;
    const { hot, all} = this.state;
    const zimulist = Object.keys(all);
    return (
      <div className="cityLayer">
        <div className="cityLayer__title">
          <div className="cityLayer__close" onClick={onClose}>关闭</div>
          选择城市
        </div>
        <div className="cityLayer__content">
          <div className="cityBlock" id="定位">
            <div className="cityBlock__label">定位城市</div>
              <div className="cityBlock__wrap">
                <div className="cityBlock__item" onClick={()=>onSelect('西安')}>西安</div>
              </div>
          </div>
          <div className="cityBlock" id="热门">
            <div className="cityBlock__label">热门城市</div>
              <div className="cityBlock__wrap">
              {
                hot.map(item=>(
                  <div key={item.id} className="cityBlock__item" onClick={()=>onSelect(item.regionName)} >{item.regionName}</div>
                ))
              }
                {/* <div className="cityBlock__item">西安</div>
                <div className="cityBlock__item">西安</div>
                <div className="cityBlock__item">西安</div>
                <div className="cityBlock__item">西安</div>
                <div className="cityBlock__item">西安</div>
                <div className="cityBlock__item">西安</div> */}
              </div>
          </div>
          {
            zimulist.map(item=>{
              const citys = all[item]
              return (
                <div key={item} className="cityList" id={item}>
                  <div onClick = {this.onScroll} className="cityList__label" >{item}</div>
                  <ul className="cityList__wrap">
                  {
                    citys.map(city=>(
                      <li key={city.id}className="cityList__item" onClick={()=>onSelect(city.regionName)}>{city.regionName}</li>
                    ))
                  }
                  </ul>
                </div>
              )
            })
          }
          {/* <div className="cityList" id="A">
            <div className="cityList__label" >A</div>
              <ul className="cityList__wrap">
                <li className="cityList__item">阿坝</li>
              </ul>
            </div> */}
        </div>
        <div className="cityLayer__index cityIndex">
          <ul className="cityIndex__list">
          
            <li className="cityIndex__item"><a href="#定位">定位</a></li>
            <li className="cityIndex__item"><a href="#热门">热门</a></li>
            {
              zimulist.map(item=><li  key={item} className="cityIndex__item"><a href={`#${item}`}>{item}</a></li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}


CityLayer.propTypes = propTypes;


export default CityLayer;
