import React from 'react'
import { Stack, Card, CardContent, CardMedia, Typography, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

export default function ChannelCard({ channel, marginTop }) {
  return (
    <Box
    sx={
      {boxShadow: "none",
       borderRadius: "20px",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", width: {md: "350px", xs: "356px"}, 
      height: "326px", 
      margin: "auto",
      marginTop: marginTop 
    }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#FFF"}}>
          <CardMedia 
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.title} 
          sx={{borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3"}}/>
          <Typography variant='h6'>
            {channel?.snippet?.title}
            <CheckCircle sx={{fontSize: 14, color: "gray", ml: "5px"}}/>
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography>
              {+channel?.statistics?.subscriberCount} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}
