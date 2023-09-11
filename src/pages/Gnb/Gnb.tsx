import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
import { GNBTableTypes } from '@typedef/types';
type Props = {
  gnbColor: string;
  tabTable: GNBTableTypes[];
  language: string;
  route: string;
  onLanguageClicked: () => void;
  onItemClicked: (item: string) => void;
};

const gnb = ({
  gnbColor,
  tabTable,
  language,
  route,
  onLanguageClicked,
  onItemClicked,
}: Props) => {
  return (
    <div className={`gnb${gnbColor}`}>
      <img
        src={gnbColor === '-white' ? images.logo_b : images.logo_w}
        // src={images.logo_w}
        className='gnb-logo'
        onClick={() => {
          onItemClicked('/');
        }}
      />
      {gnbColor === '-white' ? <div className='gnb-tiny'>[ˈɔːr.kə]</div> : ''}
      <div className='gnb-menu'>
        {tabTable.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                onItemClicked(item.path);
              }}
              style={{
                textDecorationLine: `/${route}` == item.path ? 'underline' : '',
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className={`gnb-${language}`} onClick={onLanguageClicked}>
        <div className='kr-btn'>KR</div>
        <div className='en-btn'>EN</div>
      </div>
      <div className='gnb-join' onClick={() => onItemClicked('/')}>
        Join Us
      </div>
    </div>
  );
};

export default gnb;
