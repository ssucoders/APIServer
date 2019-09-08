const express = require("express");
const app = express();

const port = 3010;
//https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api/employees", (req, res)=>{
    let users = [
        {
          "name": "Saif ur rehman",
          "designation": "Sr Software Engineer",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0167.jpg",
          "id":"1"
        },
        {
          "name": "Ubaid ur rehman",
          "designation": "Software Engineer",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0150.jpg",
          "id":"2"
        },
        {
          "name": "Atta ur rehman",
          "designation": "Admin",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0170.jpg",
          "id":"3"
        },
        {
          "name": "Shuja",
          "designation": "Sr Software Engineer",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0167.jpg",
          "id":"4"
        },
        {
          "name": "Awais",
          "designation": "Software Engineer",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0150.jpg",
          "id":"5"
        },
        {
          "name": "Habib",
          "designation": "Admin",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0170.jpg",
          "id":"6"
        },
        {
          "name": "Ibrar",
          "designation": "Sr Software Engineer",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0167.jpg",
          "id":"7"
        },
        {
          "name": "Bilal",
          "designation": "Software Engineer",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0150.jpg",
          "id":"8"
        },
        {
          "name": "Amaar Ali",
          "designation": "Admin",
          "checkin": null,
          "checkout": null,
          "picture": "IMG-20190205-WA0170.jpg",
          "id":"9"
        }
    ]
    res.send(JSON.stringify(users))
})

let kpis = [
  {"name": "TC", "title": "Timeline Consciousness"},
  {"name": "TEP", "title": "TEP-18- Developers"},
  {"name": "SOO", "title": "Sense of Ownership"},
  {"name": "TP", "title": "Team Play"},
  {"name": "INI", "title": "Initiative"},
  {"name": "DP", "title": "Discipline & Puntucality"},
  {"name": "TS", "title": "Time Sheets"},
  {"name": "COM", "title": "Communication"}
]

let pointTypes = [
  {"name": "positive", "title": "Positive", "point": 1},
  {"name": "negative", "title": "Negative", "point": -1},
  {"name": "neutral", "title": "Neutral", "point":0},
  {"name": "appreciation", "title": "Appreciation", "point": 5}
]

let teams = [
  {
    "name": "Team A",
    "description": "A Team",
    "picture": "team A.jpg",
    "id":"1",
    "members": [
      {
        "name": "Saif ur rehman",
        "designation": "Sr Software Engineer",
        "picture": "IMG-20190205-WA0167.jpg",
        "id":"1",
        "points": [
          {"type": "positive", "details": "good job handling critical bug today", "kpi": "SOO", "date":"2019-07-26T12:46:16.3130000Z"},
          {"type": "appreciation", "details": "met deadlines before hand and delivered quality release", "kpi": "TC", "date":"2019-07-27T12:46:16.3130000Z"}
        ]
      },
      {
        "name": "Ubaid ur rehman",
        "designation": "Software Engineer",
        "picture": "IMG-20190205-WA0150.jpg",
        "id":"2",
        "points": [
          {"type": "positive", "details": "handled customer communication nicely to understand new pbi requirements", "kpi": "COM", "date":"2019-07-26T12:46:16.3130000Z"},
          {"type": "negative", "details": "TFS time/tasks not updated", "kpi": "DP", "date":"2019-07-27T12:46:16.3130000Z"}
        ]
      },
      {
        "name": "Atta ur rehman",
        "designation": "Admin",
        "picture": "IMG-20190205-WA0170.jpg",
        "id":"3",
        "points": [
          {"type": "negative", "details": "TOSS timesheets not updated", "kpi": "DP", "date":"2019-07-27T12:46:16.3130000Z"}
        ]
      }
    ]
  },
  {
    "name": "Team B",
    "description": "B Team",
    "picture": "team B.jpg",
    "id":"2",
    "members": [
      {
        "name": "Ubaid ur rehman",
        "designation": "Software Engineer",
        "picture": "IMG-20190205-WA0150.jpg",
        "id":"2",
        "points": []
      },
      {
        "name": "Atta ur rehman",
        "designation": "Admin",
        "picture": "IMG-20190205-WA0170.jpg",
        "id":"3",
        "points": []
      }
    ]
  },
  {
    "name": "Team C",
    "description": "C Team",
    "picture": "team C.jpg",
    "id":"3",
    "members": [
      {
        "name": "Atta ur rehman",
        "designation": "Admin",
        "picture": "IMG-20190205-WA0170.jpg",
        "id":"3",
        "points": []
      }
    ]
  }
]
app.get("/api/teams", (req, res)=>{
    res.send(JSON.stringify(teams))
})

app.listen(port, ()=> console.log("Listening to Port: ", port))