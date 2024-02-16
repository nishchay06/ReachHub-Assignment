const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

// Endpoint to get users data
app.get("/users", async (req, res) => {
  try {
    const url = "https://lichess.org/api/player"

    // Make a GET request to the Lichess API
    const response = await axios.get(url)

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Send the games data as the response
      res.json(response.data)
    } else {
      res.status(response.status).json({ error: `Error: ${response.status}` })
    }
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` })
  }
})

// Endpoint to get games data
app.get("/games", async (req, res) => {
  try {
    const url = "https://lichess.org/games"

    // Make a GET request to the Lichess API
    const response = await axios.get(url)

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Send the games data as the response
      res.json(response.data)
    } else {
      res.status(response.status).json({ error: `Error: ${response.status}` })
    }
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` })
  }
})

// Start the Express app
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
