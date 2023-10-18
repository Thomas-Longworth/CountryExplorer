const express = require("express")
const app = express()
const cors = require("cors")


const PORT = 5000

app.use(cors())

app.use(express.json())






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


app.listen(PORT)