import React from "react";

const EventList = ({ events, onDelete, onUpdate }) => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p><b>Date:</b> {new Date(event.date).toLocaleDateString()}</p>
          <p><b>Location:</b> {event.location}</p>
          <button onClick={() => onUpdate(event)}>✏️ Edit</button>
          <button onClick={() => onDelete(event._id)}>🗑️ Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
