import React from 'react';
import '../Header/containers/HeaderContainer';
import HeaderContainer from '../Header/containers/HeaderContainer';
import cscImg from '../../assets/images/CITY/cscImg.png';
import './styles/csc.style.css';

type Props = {};
const youtubeList: string[] = [
  'PdHb5InGX6M',
  'lRmaFUvChtg',
  'NgYpI3i2t3o',
  '7tcrj9cwj7Y',
  'ycANAewvLzc',
  'Mcccr7nAhY4',
  'smWQdocL2CM',
  'mFj-7N-2CrI',
  'edZSVknhMss',
];
const Csc = (props: Props) => {
  return (
    <div className='csc'>
      <HeaderContainer work={true} />
      <div className='csc-body'>
        <img className='csc-body-img' src={cscImg}></img>
        <div className='csc-body-youtube'>
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

export default Csc;
