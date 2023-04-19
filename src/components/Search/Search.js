import React from 'react'
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Card from './Searchcard/Card';
import axios from 'axios';
import './Search.css'
const Search = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const datafn = async () => {
        if(text===""){
            setData([]);
            return;
        }
        await axios
      .get(
        `http://localhost:8000/api/v1/movies/searchMovie?${text}`
      )
      .then((res) => {
        console.log("res",res.data?.data?.movies)

        setData(res.data?.data?.movies);
      });
  };
    useEffect(() => {
        datafn();
      }, [text]);

    const clearBtn=()=>{
        setData([]);
        setText("");
    }
    console.log("data",data)
    return (
        <>
            <div >
                <div className="searchinput">
                    <input 

                    className="hotstarSearch"
                    type="text"
                    onInput={(e) => setText(e.target.value)}

                    placeholder="Search"
                    />
                    <div>
                    {text===""? <SearchIcon />:< CloseIcon id="clearBtn" onClick={clearBtn} /> }
                    </div>
                </div>
                { data && data?.length!= 0 && 
                <div id="searchBox">
                    {data.map((el) => (
                        <Link to={`/movie/${el._id}`} onClick={clearBtn}>
                          <Card path={"dysn"} title={el.movieName} image={el?.movieBannerSmall} />
                        </Link>
                    ))}
                </div>
                }
            </div>
        </>
    )
}

export default Search