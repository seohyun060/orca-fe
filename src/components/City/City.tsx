import React from 'react';
import './styles/city.style.css';
import '../Header/containers/HeaderContainer';
import HeaderContainer from '../Header/containers/HeaderContainer';
import cityImg from '../../assets/images/CITY/cityImg.png';

type Props = {};

const youtubeList: string[] = [
  'e5bciDPDPdg',
  'H2fbTCrmgyw',
  'gcbtto4srko',
  'aGKsIRpbMW0',
  'ml1k4Ip_kg4',
  'HO_hv9IHADg',
  'jVxknE0m0eA',
  '2yDhtHEPM1M',
  'dhzYLsdsMG0',
];
const City = (props: Props) => {
  return (
    <div className='city'>
      <HeaderContainer work={true} />
      <div className='city-body'>
        <img className='city-body-img' src={cityImg}></img>
        <div className='city-body-youtube'>
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

export default City;
