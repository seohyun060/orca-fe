import React, { useCallback, useEffect, useState } from 'react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

type Props = {
  work?: boolean;
};
const HeaderContainer = ({ work }: Props) => {
  const navigate = useNavigate();

  const [check, setcheck] = useState('');
  const [toggle, setToggle] = useState(false);

  const onNavigateHome = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const onNavigateContact = useCallback(() => {
    navigate('/contact');
  }, [navigate]);
  const onNavigateIdeology = useCallback(() => {
    navigate('/ideology');
  }, [navigate]);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  useEffect(() => {
    if (work === true) {
      setcheck('-clicked');
    } else {
      setcheck('');
    }
  }, []);
  return (
    <Header
      check={check}
      toggle={toggle}
      onToggle={onToggle}
      onNavigateHome={onNavigateHome}
      onNavigateContact={onNavigateContact}
      onNavigateIdeology={onNavigateIdeology}
    />
  );
};

export default HeaderContainer;
