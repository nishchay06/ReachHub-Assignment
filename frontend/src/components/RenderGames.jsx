import React from "react"
import axios from "axios"
const cheerio = require("cheerio")
import { useEffect, useState } from "react"

const RenderGames = () => {
  const [games, setGames] = useState("")
  const path = "http://localhost:3000/games"
  function getData(path) {
    axios
      .get(path)
      .then((response) => {
        console.log(response.data)
        setGames(response.data)
      })
      .catch((error) => {
        console.error(error)
        setGames("")
      })
  }

  useEffect(() => {
    getData(path)
  }, [])
  return <div>{games}</div>
}
export default RenderGames
