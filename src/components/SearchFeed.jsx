import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { fetchFormAPI } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {
  const [videos, setVideos] = useState("")
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFormAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => (setVideos(data.items)))
  }, [searchTerm])

  return (
    <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
      <Typography variant="h4" mb={2} sx={{color: "white"}}>
        Search Results for <span style={{color: "#F31503"}}> {searchTerm}</span>
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

