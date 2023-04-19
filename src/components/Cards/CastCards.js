import React from 'react'
import './CastCards.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const CastCards = ({ id, title, description, imageUrl, media_type }) => {
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
            <Link to={`/${media_type || "movie"}/${id}`}>
            <div
                style={{
                backgroundImage: `url(${baseImgUrl + '/wakanda.jpg'})`,
                // backgroundImage: `url(${baseImgUrl + data.poster_path})`,
                }}
                className="circular-row-card"
            >
                {/* <div className="wrap">
                <div>
                    <div className="card-content">
                    </div>
                </div>
                </div> */}
            </div>
            <p className='castTitle'>Cast Name</p>
            </Link>
        </>
    )
}

export default CastCards