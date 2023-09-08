import React from 'react';
import './styles/footer.styles.scss';
import { EChange } from '@typedef/types';
import images from 'src/assets/images';
type Props = {
  email: string;
  onChangeEmail: (e: EChange) => void;
  onSubmitClicked: () => void;
};

const Footer = ({ email, onChangeEmail, onSubmitClicked }: Props) => {
  return (
    <div className='footer'>
      <div className='footer-news'>
        <div className='footer-news-head'>Subscribe to the newsletter</div>
        <form onSubmit={onSubmitClicked}>
          <input
            placeholder='Please write your email address!'
            onChange={onChangeEmail}
            required
            value={email}
          ></input>
          <button type='submit'>Subscribe</button>
        </form>
        <div className='footer-news-please'>
          Please enter your email address, and the fascinating newsletter will
          be delivered to your inbox starting from the date of your
          subscription.
        </div>
      </div>
      <div className='footer-info'>
        <div className='footer-info-head'>
          <div className='legal'>Legal Notice</div>
          <div className='policy'>Privacy Policy</div>
        </div>
        <div className='footer-info-beamworks'>
          주식회사 빔웍스 BeamWorks Inc.
        </div>
        <div className='footer-info-ceo'>
          <div className='ceo'>CEO</div>
          <div className='kim'>김원화 | 김재일</div>
        </div>
        <div className='footer-info-address'>
          <div className='business'>Business location and address</div>
          <div className='location'>
            107, 3rd Floor, 136-gil, Chilgok Central Road, Buk-gu, Daegu, South
            Korea (Hakjeong-dong)
          </div>
        </div>
        <div className='footer-info-number'>
          <div className='number1'>General Contact Number</div>
          <div className='number2'>053-322-2107</div>
          <div className='email1'>General Contact Email</div>
          <div className='email2'>bws@beamworks.co.kr</div>
          <div className='fax1'>Fax</div>
          <div className='fax2'>053-322-2108</div>
        </div>
        <div className='footer-info-logo'>
          <img className='beamworks' src={images.beamworks}></img>
          <img src={images.logo_s}></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
