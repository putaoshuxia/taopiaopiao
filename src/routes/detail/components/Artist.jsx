/*
 * @Author: putaoshuxia 
 * @Date: 2019-04-21 21:46:48 
 * @Last Modified by: putaoshuxia
 * @Last Modified time: 2019-04-21 22:50:32
 * @content 演职员表
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Artist.css'

const Artist = ({ data }) => {
  return (
    <div className="mArtist">
      <ul className="mArtist__list">
        {
          data.map(item => (
            <li className="" key={item.name}>
              <a href="#" className="artistInfo">
                <div className="artistInfo__image" style={{ backgroundImage: `url(${item.image})` }} />
                <div>
                  <dl className="artistInfo__name">{item.name}</dl>
                  <dd className="artistInfo__job">{item.job}</dd>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Artist.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Artist;



