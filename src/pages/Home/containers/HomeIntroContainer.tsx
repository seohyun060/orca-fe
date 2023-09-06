import React from 'react';
import HomeIntro from '../components/HomeIntro';
import { useState, useEffect, useCallback } from 'react';
import { EChange } from '@typedef/types';

type Props = {};
const emailList: string[] = [];
const HomeIntroContainer = (props: Props) => {
  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback(
    (e: EChange) => {
      setEmail(e.target.value);
    },
    [email],
  );
  const onSubmitClicked = useCallback(() => {
    emailList.push(email);
    setEmail('');
  }, []);
  return (
    <HomeIntro
      email={email}
      onChangeEmail={onChangeEmail}
      onSubmitClicked={onSubmitClicked}
    />
  );
};

export default HomeIntroContainer;
