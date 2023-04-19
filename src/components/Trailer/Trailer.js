import React from 'react'
import { width } from '@mui/system';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'; 
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import TrailerCard from '../Cards/TrailerCard';

const Trailer = ({row_title, trailer}) => {
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
          <div className="" ref={ref}>
              {/* {data.map(el =>  */}
              <TrailerCard 
                  videoKey={trailer}
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

export default Trailer


