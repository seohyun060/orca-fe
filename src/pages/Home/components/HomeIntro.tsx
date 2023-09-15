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
  const { t } = useTranslation();
  return (
    <div className='intro-background'>
      <div className='home-intro'>
        <div className='home-intro-what'>
          <div className='home-intro-what-head'>{t("orca_introduce")}</div>
          <div className='home-intro-what-about'>{t("orca_about")}</div>
          <div className='home-intro-what-body'>
            {t("orca_what")}
          </div>
        </div>
        <div className='home-intro-goal'>
          <div className='home-intro-goal-head'>{t("orca_goal_head")}</div>
          <div className='home-intro-goal-body1'>
            {t("orca_goal_body1")}
          </div>
          <div className='home-intro-goal-body2'>
            {t("orca_goal_body2")}
          </div>
        </div>
        <div className='home-intro-contact'>
          <div className='home-intro-contact-head'>
            {t("interested")}
          </div>
          <form className='home-intro-contact-email' onSubmit={onSubmitClicked}>
            <input
              className='email'
              placeholder={t("email_placeholder")}
              onChange={onChangeEmail}
              required
              value={email}
            ></input>
            <button type='submit'>{t("subscribe")}</button>
          </form>
          <div className='home-intro-contact-body'>
            {t("contact_sentence")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
