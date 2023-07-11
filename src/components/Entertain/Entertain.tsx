import React from 'react';
import '../Header/containers/HeaderContainer';
import HeaderContainer from '../Header/containers/HeaderContainer';
import entertainImg from '../../assets/images/CITY/entertainImg.png';
import './styles/entertain.style.css';

type Props = {};

const youtubeList: string[] = [
  'DOQesLn6-rI',
  'gqBK7u3zieU',
  'dgt2_KCUjEs',
  'ceYKq_cMpx4',
  'dRjTA7j7gYg',
  '721397zqbc8',
  'jbbUgeXI8MM',
  'pQOQA-uqEcE',
  '8_LJpXP2PGk',
];
const Entertain = (props: Props) => {
  return (
    <div className='entertain'>
      <HeaderContainer work={true} />
      <div className='entertain-body'>
        <img className='entertain-body-img' src={entertainImg}></img>
        <div className='entertain-body-youtube'>
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

export default Entertain;
