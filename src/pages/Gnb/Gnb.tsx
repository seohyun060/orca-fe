import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
import { GNBTableTypes } from '@typedef/types';
type Props = {
  tabTable: GNBTableTypes[];
  language: string;
  onLanguageClicked: () => void;
  onItemClicked: (item: string) => void;
};

const gnb = ({
  tabTable,
  language,
  onLanguageClicked,
  onItemClicked,
}: Props) => {
  return (
    <div className='gnb'>
      <img src={images.logo} className='gnb-logo' />
      <div className='gnb-menu'>
        {tabTable.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                onItemClicked(item.path);
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
