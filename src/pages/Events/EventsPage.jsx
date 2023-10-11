import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// import { ReactComponent as pagingBar } from 'src/assets/images/paging_bar';
import "./style/events.css";
import images from "src/assets/images";
import EventCard from "./components/EventCard";
import EventBoxSlide from "./components/EventBoxSlide";
import EventDummyData from "./components/EventDummyData";

const EventsPage = (props) => {
  const { t } = useTranslation();

  const [numberToShow, setNumberToShow] = useState(6);

  const makePastEventList = () => {
    let list = [];
    let listlen = EventDummyData.length;
    if (EventDummyData.length > numberToShow) {
      listlen = numberToShow;
    }
    for (let i = 0; i < listlen; i++)
      list.push(
        <EventCard
          inProject={true}
          title={EventDummyData[i].title}
          eventDate={EventDummyData[i].eventDate}
          past={true}
          inEvent={true}
        />
      );
    return list;
  };

  return (
    <div className="Events">
      <section className="Section">
        <div className="SectionTitle">{t("events")}</div>
        <div className="SubPhrase">{t("events_phrase")}</div>
        <EventBoxSlide inEvent={true} />
      </section>
      <section className="Section">
        <div className="SectionTitle">{t("past_events")}</div>
        <div className="SubPhrase">{t("past_events_phrase")}</div>
        <div className="EventBox__past">
          {makePastEventList()}
          {/* {EventDummyData.map((data) => (
            <EventCard
              title={data.title}
              eventDate={data.eventDate}
              past={true}
              inEvent={true}
            />
          ))} */}
        </div>
        <div className="ButtonArrange">
          {EventDummyData.length > numberToShow ? (
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
