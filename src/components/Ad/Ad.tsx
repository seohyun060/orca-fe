import React from 'react';
import '../Header/containers/HeaderContainer';
import HeaderContainer from '../Header/containers/HeaderContainer';
import { motion } from 'framer-motion';
import adImg from '../../assets/images/CITY/adImg.png';
import './styles/ad.style.css';

type Props = {};

const youtubeList: string[] = [
  'DE6pMj0wA-0',
  'eIKOv0OoAh4',
  'aWwMkBPSPTQ',
  'xlwaUBlBSl4',
  'SmWOuNKJJqI',
  'gg3CKtP0oDk',
  'rIj-wdZTJB4',
  'CHixQbcpT2k',
  'e8KJdgGG-k4',
];
const Ad = (props: Props) => {
  return (
    <div className='ad'>
      <HeaderContainer work={true} />

      <div className='ad-body'>
        <img className='ad-body-img' src={adImg}></img>
        <div className='ad-body-youtube'>
          {youtubeList.map((youtube) => (
            <iframe
              width='317'
              height='180'
              src={`https://www.youtube.com/embed/${youtube}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ad;
