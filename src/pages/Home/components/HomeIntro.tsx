import React from 'react';
import '../styles/home.styles.css';
import { EChange } from '@typedef/types';
import { useTranslation } from "react-i18next";
type Props = {
  email: string;
  onChangeEmail: (e: EChange) => void;
  onSubmitClicked: () => void;
};

const HomeIntro = ({ email, onChangeEmail, onSubmitClicked }: Props) => {
  const { i18n, t } = useTranslation();
  return (
    <div className='intro-background'>
      <div className='home-intro'>
        <div className='home-intro-what'>
          <div className='home-intro-what-head'>{t("introduce")}</div>
          <div className='home-intro-what-about'>About ORCA /ˈɔːr.kə/</div>
          <div className='home-intro-what-body'>
            The ORCA (Optimized Research in Clinical AI) Group at BeamWorks is a
            collaborative team of AI specialists and clinical researchers,
            focused on healthcare applications.
          </div>
        </div>
        <div className='home-intro-goal'>
          <div className='home-intro-goal-head'>Goal of the ORCA Group</div>
          <div className='home-intro-goal-body1'>
            We develop and validate cutting-edge AI technologies, and we
            facilitate effective communication between healthcare providers and
            patients.
          </div>
          <div className='home-intro-goal-body2'>
            Our optimized AI empowers healthcare professionals, leading to more
            accurate diagnoses and personalized treatment plans, ultimately
            improving patient outcomes.
          </div>
        </div>
        <div className='home-intro-contact'>
          <div className='home-intro-contact-head'>
            Are you interested in joining the ORCA Group?
          </div>
          <form className='home-intro-contact-email' onSubmit={onSubmitClicked}>
            <input
              className='email'
              placeholder='Please write your email address!'
              onChange={onChangeEmail}
              required
              value={email}
            ></input>
            <button type='submit'>Subscribe</button>
          </form>
          <div className='home-intro-contact-body'>
            Please provide us with your email address so that we can send it to
            the ORCA Group for confirmation. Once they verify, we will forward
            the information to your email.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
