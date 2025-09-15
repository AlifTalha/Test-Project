import React, { useEffect, useState } from "react";
import api from "../api/axios";
import EventList from "../components/EventList";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div className="home">
      <h2>Upcoming Events</h2>
      <EventList events={events} />
    </div>
  );
};

export default Home;
