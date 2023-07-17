import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Box} from "@mui/material"
import {Feed, VideoDetail, ChannelDetail, SearchFeed, NavBar} from "./components"

export default function App() {
  return (
      <Box sx={{background: "#000"}}>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' exact element={<VideoDetail/>}/>
          <Route path='/channel/:id' exact element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}/>
        </Routes>
      </Box>
  )
}
