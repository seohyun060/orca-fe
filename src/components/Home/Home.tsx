import React from 'react';
import './styles/home.style.css';
import HeaderContainer from '../Header/containers/HeaderContainer';
import home_banner from '../../assets/images/HOME/home_banner.png';
type Props = {};
const youtubeList: string[] = [
  'DOQesLn6-rI',
  'DE6pMj0wA-0',
  'yOv2-VoHQY4',
  'gg3CKtP0oDk',
  'i4VlcMqlMnE',
  'e8KJdgGG-k4',
  'BT8KILKrwJQ',
  'rIj-wdZTJB4',
  '3T5hY7-ead4',
];
const Home = (props: Props) => {
  return (
    <div className='home'>
      <HeaderContainer />
      <div className='home-body'>
        <img className='banner' src={home_banner}></img>
        <div className='home-body-youtube'>
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
        <img
          className='home-body-introduce'
          src='https://static.wixstatic.com/media/6f1958_58a062da35ed4386b7c8d74fd8f5ca4b~mv2.jpg/v1/fill/w_979,h_587,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94%EB%84%A4%EB%AA%A8%20%EC%86%8C%EA%B0%9C4.jpg'></img>
        <img
          className='home-body-client'
          src='https://static.wixstatic.com/media/6f1958_796fcef6ea0649e2bc515bbe60226b8a~mv2.png/v1/fill/w_979,h_921,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B82.png'></img>
        <img src='https://static.wixstatic.com/media/6f1958_e8a47fbce07d499a996b214f234e404a~mv2.png/v1/fill/w_979,h_805,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/%EB%B8%8C%EB%9E%9C%EB%93%9C%EC%86%8C%EA%B0%9C6.png'></img>
      </div>
    </div>
  );
};

export default Home;
