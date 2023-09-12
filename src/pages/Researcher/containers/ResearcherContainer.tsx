import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Researcher from '../Researcher';
import { EChange, ResearcherList } from '@typedef/types';
import images from 'src/assets/images';
import { useNavigate } from 'react-router-dom';
type Props = {
  location: string;
};
const researcherList: ResearcherList = [];
for (let j = 0; j < 20; j++) {
  researcherList.push({
    name: `${j}Name`,
    profile: images.profile,
    department: 'Radiology Department',
    project: 'CadAI-B projects',
  });
}
const listLength = researcherList.length;

const ResearcherContainer = ({ location }: Props) => {
  const route = location.split('/')[1];
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [readMore, setReadMore] = useState(false);
  const [containerHeight, setContainerHeight] = useState('1742px');
  const onReadMoreClick = useCallback(() => {
    if (filteredList.length > 16) {
      setReadMore((prev) => !prev);
    }
  }, [readMore]);
  const onSetSearch = useCallback(
    (e: EChange) => {
      setSearch(e.target.value);
    },
    [search],
  );
  const filteredList = useMemo(
    () =>
      researcherList.filter(
        (researcher) => researcher.name.indexOf(search) !== -1,
      ),
    [search],
  );
  const onResearcherClick = useCallback(
    (name: string, profile: string, department: string, project: string) => {
      navigate('/researcherdetail', {
        state: {
          Name: name,
          Profile: profile,
          Department: department,
          Project: project,
        },
      });
    },
    [navigate],
  );

  useEffect(() => {
    if (filteredList.length > 16 && !readMore) {
      setContainerHeight('1742px');
    } else {
      setContainerHeight('fit-content');
    }
    return () => {};
  }, [filteredList, readMore, containerHeight]);

  return (
    <Researcher
      route={route}
      search={search}
      readMore={readMore}
      onSetSearch={onSetSearch}
      filteredList={filteredList}
      containerHeight={containerHeight}
      onReadMoreClick={onReadMoreClick}
      onResearcherClick={onResearcherClick}
    />
  );
};

export default ResearcherContainer;