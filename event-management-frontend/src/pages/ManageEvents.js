import React, { useEffect, useState } from "react";
import api from "../api/axios";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    api.get("/events").then((res) => setEvents(res.data));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (data) => {
    await api.post("/events", data);
    fetchEvents();
  };

  const deleteEvent = async (id) => {
    await api.delete(`/events/${id}`);
    fetchEvents();
  };

  const updateEvent = async (event) => {
    const newTitle = prompt("Enter new title", event.title);
    if (newTitle) {
      await api.put(`/events/${event._id}`, { ...event, title: newTitle });
      fetchEvents();
    }
  };

  return (
    <div className="manage-events">
      <h2>Manage Events</h2>
      <EventForm onSubmit={addEvent} />
      <EventList events={events} onDelete={deleteEvent} onUpdate={updateEvent} />
    </div>
  );
};

export default ManageEvents;
