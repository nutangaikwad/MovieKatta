import React from 'react'
import './CardRows.css'
import { width } from '@mui/system'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded' 
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import Cards from '../Cards/Cards'

const CardRows = ({row_title,language, data}) => {
    const ref = useRef(null);

    const scroll = (offset) => {
        console.log(ref.current)
        ref.current.scrollLeft += offset;
      };
        const{id, category} = useParams()
        // const [data, setData] = useState([])
      
        // const getData = async () => {
        //   const url = id?`https://api.themoviedb.org/3/${category}/${id}/similar?api_key=3d63cba818eb8bc583a23f643a655a3d`:!language?`https://api.themoviedb.org/3/trending/${category=="tv"?"tv":category=="movie"?"movie":"all"}/week?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`:`https://hotstar-v.herokuapp.com/movies?language=${language}`
        //   const a = await axios.get(url)
        //   setData(a.data.results)
        // }
        // useEffect(() => { getData() }, [id,category])
  return (
    <>
    <div className="row-title">
      <h3 className='row-heading'>{row_title}</h3>
      <div className="card-container" ref={ref}>
        <ArrowForwardIosRoundedIcon onClick={()=>{scroll(1700)}} className="right-btn"></ArrowForwardIosRoundedIcon>
        <ArrowBackIosRoundedIcon  onClick={()=>{scroll(-1700)}} className="left-btn"></ArrowBackIosRoundedIcon>
        
        {data?.map(el => 
        <Cards
          image={el?.movieBannerSmall}
          key="0"
          id={el?._id}
          title={el?.movieName}
          media_type="jpg"
          imageUrl={el?.movieBannerSmall}
          description={el?.movieInfo}
        />
       )}
        
      </div>
    </div>
    </>
  )
}

export default CardRows