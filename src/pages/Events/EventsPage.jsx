import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";

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
      const today = moment(new Date());
      let coming = [];
      let past = [];
      data.data.map((event) => {
        if (today.isSameOrBefore(event.endDate)) {
          coming.push(event);
        } else {
          past.push(event);
        }
      });
      past = past.sort((a, b) => b.dday - a.dday);
      coming = coming.sort((a, b) => a.dday - b.dday);
      setComingEventsData(coming);
      setPastEventsData(past);
    });
  }, []);

  return (
    <div className="Events">
      <section className="Section">
        <div className="SectionTitle">{t("events")}</div>
        <div className="SubPhrase">{t("events_phrase")}</div>
        {comingEventsData ? (
          <EventBoxSlide inEvent={true} eventsData={comingEventsData} />
        ) : (
          <></>
        )}
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
