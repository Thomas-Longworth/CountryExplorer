const express = require("express")
const app = express()
const cors = require("cors")

const PORT = 5000

app.use(cors())

app.use(express.json())

//middlerware error



//Route to fetch country data 
app.get("/countries/:country", async(req, res)=> {
    try {
        const {country}=req.params
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        const data = await response.json()
        res.json(data)
        console.log(data)
        
    } catch {
      
        
        
    }
})


app.listen(PORT)