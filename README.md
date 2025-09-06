

Post   /auth/register
Post   /auth/login
POST   /events
POST   /students/register
PUT    /students/attendance/:id
PUT    /students/feedback/:id
GET    /reports/events/popularity
GET    /reports/events/attendance
GET    /reports/events/feedback
GET    /reports/students/participation



```
college-event-management
├─ .env
├─ package-lock.json
├─ package.json
├─ README.md
├─ server.js
└─ src
   ├─ app.js
   ├─ config
   │  └─ supabaseClient.js
   ├─ controllers
   │  ├─ authController.js
   │  ├─ eventController.js
   │  ├─ reportController.js
   │  └─ studentController.js
   ├─ routes
   │  ├─ authRoutes.js
   │  ├─ eventRoutes.js
   │  ├─ reportRoutes.js
   │  └─ studentRoutes.js
   └─ utils
      └─ errorHandler.js

```