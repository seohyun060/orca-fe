import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// import { ReactComponent as pagingBar } from 'src/assets/images/paging_bar';
import "./style/events.css";
import EventCard from "./components/EventCard";
import EventBoxSlide from "./components/EventBoxSlide";

import { getAllEventData } from "src/api/eventsAPI";

const EventsPage = (props) => {
  const { t } = useTranslation();

  const [pastEventsData, setPastEventsData] = useState([]);
  const [comingEventsData, setComingEventsData] = useState([]);
  const [numberToShow, setNumberToShow] = useState(6);

  const makePastEventList = () => {
    let list = [];
    let listlen = pastEventsData.length;
    if (pastEventsData.length > numberToShow) {
      listlen = numberToShow;
    }
    for (let i = 0; i < listlen; i++)
      list.push(
        <EventCard
          id={pastEventsData[i].id}
          thumbnail={pastEventsData[i].thumbnail}
          title={pastEventsData[i].title}
          startDate={pastEventsData[i].startDate}
          endDate={pastEventsData[i].endDate}
          openingHour={pastEventsData[i].openingHour}
          dday={pastEventsData[i].dday}
          past={true}
          inEvent={true}
        />
      );
    return list;
  };

  useEffect(() => {
    getAllEventData().then((data) => {
      let coming = [];
      let past = [];

      data.data.map((event) => {
        if (event.dday >= 0) {
          coming.push(event);
        } else {
          past.push(event);
        }
      });
      coming = coming.sort((a, b) => (a.dday - b.dday))
      console.log(coming)
      console.log(past)
      setComingEventsData(coming);
      setPastEventsData(past);
    });
  }, []);

  return (
    <div className="Events">
      <section className="Section">
        <div className="SectionTitle">{t("events")}</div>
        <div className="SubPhrase">{t("events_phrase")}</div>
        {comingEventsData ? <EventBoxSlide inEvent={true} eventsData={comingEventsData} /> : <></>}
      </section>
      <section className="Section">
        <div className="SectionTitle">{t("past_events")}</div>
        <div className="SubPhrase">{t("past_events_phrase")}</div>
        <div className="EventBox__past">{makePastEventList()}</div>
        <div className="ButtonArrange">
          {pastEventsData.length > numberToShow ? (
            <button
              className="ReadMoreButton"
              onClick={() => setNumberToShow(numberToShow + 7)}
            >
              {t("read_more")}
            </button>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
