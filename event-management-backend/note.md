API Endpoints to Test

GET all events
GET http://localhost:5000/api/events

Create event
POST http://localhost:5000/api/events
Body → JSON:

{
  "title": "Tech Conference",
  "description": "Annual tech event",
  "date": "2025-10-01",
  "location": "Dhaka"
}


Get single event
GET http://localhost:5000/api/events/:id

Update event
PUT http://localhost:5000/api/events/:id

Delete event
DELETE http://localhost:5000/api/events/:id



## 

# Create project folder
mkdir event-management-backend
cd event-management-backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express mongoose dotenv cors

# Install dev dependencies (for auto-restart)
npm install --save-dev nodemon


npm run dev
