import React from 'react';
import Footer from '../Footer';
import { useState, useEffect, useCallback } from 'react';
import { EChange } from '@typedef/types';
const emailList: string[] = [];
type Props = {};

const FooterContainer = (props: Props) => {
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
    <Footer
      email={email}
      onChangeEmail={onChangeEmail}
      onSubmitClicked={onSubmitClicked}
    />
  );
};

export default FooterContainer;