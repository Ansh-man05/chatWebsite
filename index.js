const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


    app.post("/authenticate", async (req, res) => {
        const { username } = req.body;
      
        try {
          const r = await axios.post(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "6c5c0258-71bd-49de-ad86-8f0a673f968e" } }
          );
          return res.status(r.status).json(r.data);
        } catch (e) {
          return res.status(e.response.status).json(e.response.data);
        }
      });     
      

app.listen(3001);
