import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.styles.scss";
import { useTranslation } from "react-i18next";
import EventBoxSlide from "src/pages/Events/components/EventBoxSlide";

import { getAllEventData } from "src/api/eventsAPI";

const HomeEvents = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [comingEventsData, setComingEventsData] = useState([]);

  useEffect(() => {
    getAllEventData(false).then((data) => {
      let coming = [];

      data.data.map((event) => {
        if (event.dday >= 0) {
          coming.push(event);
        }
      });
      coming = coming.sort((a, b) => a.dday - b.dday);
      console.log(coming);
      setComingEventsData(coming);
    });
  }, []);

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label>{t("events")}</label>
        <button
          className="ViewButton"
          onClick={() => {
            navigate("/events");
            window.scrollTo(0, 0);
          }}
        >
          {t("view_all")}
        </button>
      </div>
      <EventBoxSlide inEvent={false} eventsData={comingEventsData}/>
    </section>
  );
};

export default HomeEvents;
