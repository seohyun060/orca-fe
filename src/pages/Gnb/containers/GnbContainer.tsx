import Gnb from '../Gnb';

import { GNBTableTypes } from '@typedef/types';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
type Props = {};
const GnbContainer = (props: Props) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>('/');
  const [language, setLanguage] = useState('En');
  const tabTable: GNBTableTypes[] = [
    {
      label: 'ORCA',
      path: '/',
    },
    {
      label: 'Researcher',
      path: '/researcher',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Events',
      path: '/events',
    },
    {
      label: 'Insights',
      path: '/insights',
    },
  ];
  const onItemClicked = useCallback((path: string) => {
    if (path === '/custom') {
      return;
    }
    setSelectedTab(path);
    navigate(path);
  }, []);
  const onLanguageClicked = useCallback(() => {
    if (language === 'Kr') {
      setLanguage('En');
    } else {
      setLanguage('Kr');
    }
  }, [language]);

  return (
    <div>
      <Gnb
        tabTable={tabTable}
        language={language}
        onLanguageClicked={onLanguageClicked}
        onItemClicked={onItemClicked}
      />
    </div>
  );
};

export default GnbContainer;
