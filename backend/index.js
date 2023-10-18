const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path')



app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});





// Route to fetch country data
app.get("/countries/:country", async (req, res, next) => {
  try {
    const { country } = req.params;
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);

    if (!response.ok) {

      res.status(response.status).json({ error: "Country not found" });
    } else {
      const data = await response.json();
      res.json(data);
      console.log(data);
    }
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT =  5000
app.listen(PORT)