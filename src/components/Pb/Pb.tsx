import React from 'react';
import '../Header/containers/HeaderContainer';
import HeaderContainer from '../Header/containers/HeaderContainer';
import pbImg from '../../assets/images/CITY/pbImg.png';
import './styles/pb.styles.css';

type Props = {};

const youtubeList: string[] = [
  'yOv2-VoHQY4',
  'N6M58M6UFTE',
  '_3Ropi9ixqk',
  '8FOeqaqexVg',
  'A8idyjGPwxg',
  'BT8KILKrwJQ',
  'i4VlcMqlMnE',
  'XHCX3BSMnWM',
  'ZFC2PpA3Ud4',
];
const Pb = (props: Props) => {
  return (
    <div className='pb'>
      <HeaderContainer work={true} />
      <div className='pb-body'>
        <img className='pb-body-img' src={pbImg}></img>
        <div className='pb-body-youtube'>
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

export default Pb;
