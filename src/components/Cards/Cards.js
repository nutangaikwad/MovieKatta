import React from 'react'
import './Cards.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Cards = ({ id, title, description, imageUrl, media_type, image}) => {
    let baseImgUrl = "/images/"; // + imageUrl
    // let baseImgUrl = "https://image.tmdb.org/t/p/original"; // + imageUrl
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
    <Link to={`/movie/${id}`}>
      <div
        style={{
          // backgroundImage: `url(wakanda.jpg)`,
          backgroundImage: `url(${image ? baseImgUrl + image : 'https://dummyimage.com/450X550'})`,
        }}
        className="row-card"
      >
        <div className="wrap">
          <div className="card-gradient">
            <div className="card-content">
              <h3 style={{color:'white'}}>{title}</h3>
              <p style={{color:'white', textAlign:'justify', padding:'10px'}}>{ description ? `${description.slice(1,150)}...Read more`:''}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default Cards