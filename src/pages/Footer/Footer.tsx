import React from 'react';
import './styles/footer.styles.css';
import { EChange } from '@typedef/types';
import { useTranslation } from "react-i18next";
import images from 'src/assets/images';
type Props = {
  email: string;
  onChangeEmail: (e: EChange) => void;
  onSubmitClicked: () => void;
};

const Footer = ({ email, onChangeEmail, onSubmitClicked }: Props) => {
  const { t } = useTranslation();
  return (
    <div className='footer'>
      <div className='footer-news'>
        <div className='footer-news-head'>{t("newsletter_subscribe")}</div>
        <form onSubmit={onSubmitClicked}>
          <input
            placeholder={t("input_email")}
            onChange={onChangeEmail}
            required
            value={email}
          ></input>
          <button type='submit'>{t("subscribe")}</button>
        </form>
        <div className='footer-news-please'>
          {t("newsletter_recommand")}
        </div>
      </div>
      <div className='footer-info'>
        <div className='footer-info-head'>
          <div className='legal'>{t("legal_notice")}</div>
          <div className='policy'>{t("privacy_policy")}</div>
        </div>
        <div className='footer-info-beamworks'>
          {t("beamworks_inc")}
        </div>
        <div className='footer-info-ceo'>
          <div className='ceo'>{t("ceo")}</div>
          <div className='kim'>{t("ceo_name")}</div>
        </div>
        <div className='footer-info-address'>
          <div className='business'>{t("business_location")}</div>
          <div className='location'>  
            {t("business_adress")}
          </div>
        </div>
        <div className='footer-info-number'>
          <div className='number1'>{t("contact_num")}</div>
          <div className='number2'>{t("real_contanct_num")}</div>
          <div className='email1'>{t("contact_email")}</div>
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
