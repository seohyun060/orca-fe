import React from 'react';
import '../Header/containers/HeaderContainer';
import HeaderContainer from '../Header/containers/HeaderContainer';
import { motion } from 'framer-motion';
import broadImg from '../../assets/images/CITY/broadImg.png';
import './styles/broad.style.css';

type Props = {};

const youtubeList: string[] = [
  'Sy8isCnrbTs',
  'ER5VHT3wE7M',
  'FZbTiz_qnnE',
  'iXNn8cu09yQ',
  '22zqTth7dg4',
  'Z_umlyY9JXU',
  '73XMWqSiz2o',
  '5gyrVBje7sw',
  'L2MFN6LP3dU',
];
const Broad = (props: Props) => {
  return (
    <div className='broad'>
      <HeaderContainer work={true} />
      <div className='broad-body'>
        <img className='broad-body-img' src={broadImg}></img>
        <div className='broad-body-youtube'>
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
        <div className='broad-body-pic'>
          <img src='https://static.wixstatic.com/media/6f1958_c646f028094f4e4a91c314d3104c8a92~mv2.jpeg/v1/fill/w_314,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/KakaoTalk_Photo_2022-06-10-21-41-01_007.jpeg'></img>
          <img src='https://static.wixstatic.com/media/6f1958_5503b566d437493590b2d0382d3f8abc~mv2.jpg/v1/crop/x_0,y_0,w_928,h_700/fill/w_315,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4.jpg'></img>
          <img src='https://static.wixstatic.com/media/6f1958_5c10e2bd9b944904bdc1a7a6ab0cefe7~mv2.jpg/v1/crop/x_0,y_56,w_926,h_702/fill/w_313,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpg'></img>
          <img src='https://static.wixstatic.com/media/6f1958_0c68ffb2c31946c08db1019813308f3c~mv2.jpg/v1/fill/w_313,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3.jpg'></img>
          <img src='https://static.wixstatic.com/media/6f1958_01140939030d47b2b292fafd1ed981e5~mv2.jpg/v1/fill/w_314,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2.jpg'></img>
          <img src='https://static.wixstatic.com/media/6f1958_3302a1cd98604dc7b840d555845c8379~mv2.jpeg/v1/crop/x_72,y_0,w_886,h_725/fill/w_311,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/KakaoTalk_Photo_2022-07-09-20-50-01_001.jpeg'></img>
        </div>
      </div>
    </div>
  );
};

export default Broad;
