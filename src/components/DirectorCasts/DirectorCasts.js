import "./DirectorCasts.css";
import React from 'react'
import { width } from '@mui/system';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'; 
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import CastCards from "../Cards/CastCards";

const DirectorCasts = ({row_title}) => {

const ref = useRef(null);
const scroll = (offset) => {
  console.log(ref.current)
  ref.current.scrollLeft += offset;
};
  const{id, category} = useParams()
  const [data, setData] = useState([])

  const getData = async () => {
    const url = '';
    const a = await axios.get(url)
    setData(a.data.results)
  }
//   let baseImgUrl = "http://localhost:3000/wakanda.jpg";
  useEffect(() => { getData() }, [id,category])
  return (
    <>
    <div className="row-title">
        <h3 className="text-left">{row_title}</h3>
        <div className="card-container" ref={ref}>
            <ArrowForwardIosRoundedIcon onClick={()=>{scroll(1700)}} className="right-btn"></ArrowForwardIosRoundedIcon>
            <ArrowBackIosRoundedIcon  onClick={()=>{scroll(-1700)}} className="left-btn"></ArrowBackIosRoundedIcon>
            {/* {data.map(el =>  */}
            <CastCards
                key="1"
                id="1"
                title="Cast"
                media_type="jpg"
                imageUrl="wakanda.jpg"
                description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Optio incidunt voluptas ipsam delectus sequi temporibus.`}
                />
             {/* )} */}
        </div>
    </div>
    </>
  )
}

export default DirectorCasts