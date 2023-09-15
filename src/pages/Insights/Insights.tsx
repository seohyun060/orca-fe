import React from 'react';
import { useTranslation } from "react-i18next";
import './style/Insight.css';
import InsightsCard from './components/InsightsCard';
import { Insight } from '@typedef/types';
type Props = {
  insightsGnbHandler: (e: string) => void;
  filteredList: Insight[];
  readMore: boolean;
  onReadMoreClick: () => void;
  containerHeight: string;
  selectedTab: number;
};

const Insights = ({
  insightsGnbHandler,
  filteredList,
  readMore,
  onReadMoreClick,
  containerHeight,
  selectedTab,
}: Props) => {
  const { t } = useTranslation();
  return (
    <div className='insights'>
      <div className='insights-head'>
        <div className='big'>ORCA Insights:</div>
        <div className='small'>{t("news")}</div>
      </div>
      <div className='insights-gnb'>
        <div className='insights-gnb-body'>
          {/* 추후에 동적생성? */}
          <button
            onClick={() => {
              insightsGnbHandler('all');
              console.log(filteredList);
            }}
            style={{
              backgroundColor: selectedTab == 0 ? '#000' : '#fff',
              color: selectedTab == 0 ? '#fff' : '#9E9E9E',
            }}
          >
            ORCA Insights
          </button>
          <button
            onClick={() => {
              insightsGnbHandler('whitepaper');
            }}
            style={{
              backgroundColor: selectedTab == 1 ? '#000' : '#fff',
              color: selectedTab == 1 ? '#fff' : '#9E9E9E',
            }}
          >
            White Paper
          </button>
          <button
            onClick={() => {
              insightsGnbHandler('publication');
            }}
            style={{
              backgroundColor: selectedTab == 2 ? '#000' : '#fff',
              color: selectedTab == 2 ? '#fff' : '#9E9E9E',
            }}
          >
            Publication
          </button>
          <button
            onClick={() => {
              insightsGnbHandler('news');
            }}
            style={{
              backgroundColor: selectedTab == 3 ? '#000' : '#fff',
              color: selectedTab == 3 ? '#fff' : '#9E9E9E',
            }}
          >
            News
          </button>
          <button
            onClick={() => {
              insightsGnbHandler('education');
            }}
            style={{
              backgroundColor: selectedTab == 4 ? '#000' : '#fff',
              color: selectedTab == 4 ? '#fff' : '#9E9E9E',
            }}
          >
            Education
          </button>
        </div>
      </div>
      <div
        className='insights-body'
        style={{
          maxHeight: containerHeight,
        }}
      >
        {filteredList.map((insight, index) => (
          <div className='insight-info'>
            <div className='insight-info-box' />
            <div className='insight-info-type'>{insight.type}</div>
            <div className='insight-info-title'>{insight.title}</div>
            <div className='insight-info-date'>{insight.date}</div>
          </div>
        ))}
      </div>
      {filteredList.length > 12 ? (
        <button className='insights-readmore' onClick={onReadMoreClick}>
          {readMore ? 'Fold' : 'Read More'}
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Insights;
