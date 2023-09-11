import React, { useCallback, useState } from 'react';
import ResearcherMapContainer from '../Home/containers/ResearcherMapContainer';
import './styles/researcher.styles.scss';
import { EChange, ResearcherList } from '@typedef/types';
import { notStrictEqual } from 'assert';
import images from 'src/assets/images';
type Props = {
  route: string;
  search: string;
  readMore: boolean;
  onSetSearch: (e: EChange) => void;
  filteredList: ResearcherList;
  containerHeight: string;
  onReadMoreClick: () => void;
  // onResearcherClick: (
  //   profile: string,
  //   name: string,
  //   department: string,
  //   project: string,
  // ) => void;
  onResearcherClick: any;
};

const Researcher = ({
  route,
  search,
  readMore,
  onSetSearch,
  filteredList,
  containerHeight,
  onReadMoreClick,
  onResearcherClick,
}: Props) => {
  return (
    <div className='researcher'>
      <div className='researcher-meet-background'>
        <div className='researcher-meet'>
          <div className='researcher-meet-head'>Meet Our Researchers</div>
          <ResearcherMapContainer route={route} />
        </div>
      </div>
      <div className='researcher-body'>
        <div className='researcher-body-head'>
          At the ORCA group, our team is comprised of dedicated AI specialists
          and accomplished clinical researchers, united by a shared passion for
          advancing healthcare through innovative AI technologies.
        </div>
        <div className='researcher-body-search'>
          <input
            placeholder='search'
            onChange={onSetSearch}
            required
            value={search}
          ></input>
          <img src={images.search} />
        </div>
        <div
          className='researcher-body-list'
          style={{
            maxHeight: containerHeight,
          }}
        >
          {filteredList.map((researcher, index) => (
            <div
              className='researcher-info'
              onClick={() => {
                onResearcherClick(
                  researcher.name,
                  researcher.profile,
                  researcher.department,
                  researcher.project,
                );
                console.log('onResearcherClick');
              }}
            >
              <img src={images.profile} />
              <div className='researcher-info-name'>{researcher.name}</div>
              <div className='researcher-info-department'>
                {researcher.department}
              </div>
              <div className='researcher-info-project'>
                {researcher.project}
              </div>
            </div>
          ))}
        </div>
        {filteredList.length > 16 ? (
          <button
            className='researcher-body-readmore'
            onClick={onReadMoreClick}
          >
            {readMore ? 'Fold' : 'Read More'}
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Researcher;
