import React from 'react'
import './TrailerCard.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { height } from '@mui/system'

const TrailerCard = ({ id, title, description, imageUrl, media_type, videoKey }) => {
    let baseImgUrl = "http://localhost:3000"; // + imageUrl
    const [data, setData] = useState({});
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/${media_type || `movie`}/${id}?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`;
      const a = await axios.get(url);
      setData(a.data);
    };
  
    useEffect(() => {
      getData();
    }, []);
  return (
    <>
        <>
            {/* <div className="trailer-row-card">
                <iframe width="400" height="200" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="trailer-row-card">
            </div> */}
             <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{padding:0}}>
          <Root>
            <iframe width='100%' height="100%" src={`https://www.youtube.com/embed/${videoKey[0]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Root>
        </Grid>
      </Grid>
    </Box>

        </>
    </>
  )
}

export default TrailerCard


const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    width:"100%",
    display:'flex',justifyContent:'center',alignItems:'center',
    height:'300px'
  },
  [theme.breakpoints.up('md')]: {
    widht:'100%',
    height:'200px'

  },
  [theme.breakpoints.up('lg')]: {
    widht:'100%',
    height:'200px'

  },
}));