import React from 'react';
import '../Header/containers/HeaderContainer';
import HeaderContainer from '../Header/containers/HeaderContainer';
import weddingImg from '../../assets/images/CITY/weddingImg.png';
import './styles/wedding.style.css';

type Props = {};

const youtubeList: string[] = [
  'bFPVTX-5R9k',
  'CD3TCXnR2oE',
  '3T5hY7-ead4',
  'zXb772OOFZA',
  'igcPMBPGlXE',
  'V2_MQAKJ0mQ',
  'euJlCDIvkL4',
  '2-ro5zhLN-M',
  'L76NTAEIN84',
];
const Wedding = (props: Props) => {
  return (
    <div className='wedding'>
      <HeaderContainer work={true} />
      <div className='wedding-body'>
        <img className='wedding-body-img' src={weddingImg}></img>
        <div className='wedding-body-youtube'>
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

export default Wedding;
