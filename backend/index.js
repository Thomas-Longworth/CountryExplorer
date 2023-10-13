const express = require("express")
const app = express()
const cors = require("cors")


const PORT = 5000

app.use(cors())

app.use(express.json())

//middlerware error



//Route to fetch country data 
// Route to fetch country data
app.get("/countries/:country", async (req, res, next) => {
    try {
      const { country } = req.params;
      const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
  
      if (!response.ok) {
        // If the response status is not OK (e.g., 404), handle the error
        res.status(response.status).json({ error: "Country not found" });
      } else {
        const data = await response.json();
        res.json(data);
        console.log(data);
      }
    } catch (error) {
      // Handle any other unexpected errors
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

app.listen(PORT)