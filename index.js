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
app.get("/api/teams", (req, res)=>{
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
              "checkin": null,
              "checkout": null,
              "picture": "IMG-20190205-WA0170.jpg",
              "id":"3"
            }
          ]
        }
    ]
    res.send(JSON.stringify(teams))
})

app.listen(port, ()=> console.log("Listening to Port: ", port))