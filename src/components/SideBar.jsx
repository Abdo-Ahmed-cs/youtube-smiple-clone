import React from 'react'
import { Stack } from "@mui/material"
import {categories} from "../utils/constants"

export default function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack 
    direction="row"
    sx={{overflowY: "auto", height: {sx: "auto", md: "95%"}, flexDirection: {xs: "row", sx: "column", md: "column"}}}
    >
        {categories.map((categoriy, index) => (
            <button
            key={index}
            onClick={() => setSelectedCategory(() => categoriy.name)}
            className='category-btn'
            style={{
                background: categoriy.name === selectedCategory && "#FC1503", color: "white"
            }}
            >
                <span style={{color: categoriy.name === selectedCategory ? "white" : "red", marginRight: "15px"}}>{categoriy.icon}</span>
                <span style={{opacity: categoriy.name === selectedCategory? "1" : "0.8", whiteSpace: "nowrap"}}>{categoriy.name}</span>
            </button>
        ))}
    </Stack>
  )
}
