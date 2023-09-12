import React from 'react';
import '../style/Insight.scss';
import images from 'src/assets/images';

export default function InsightsCard(props) {
  return (
    <div className='ResearchCard'>
      <img className='ResearchImage' src={images.logo_orca}></img>
      <div className='ResearchCategory'>CadAI-B</div>
      <div className='ResearchTitle'>
        Revolutionizing Ultrasound Technology: The Global Frontier of Artificial
        Intelligence Ultrasound
      </div>
      <div className='ViewCount'>
        <img src={images.view}></img>
        <label className='CountNumber'>0</label>
      </div>
    </div>
  );
}
