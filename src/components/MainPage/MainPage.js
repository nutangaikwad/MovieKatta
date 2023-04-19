import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Banner from '../Banner/Banner'
import CardRows from '../CardRows/CardRows'
import {GetMovieList} from '../Api/index'
const MainPage = () => {
  
    const {category,language} = useParams()
    const [data, setData] = useState([]);
  
    useEffect(() => {
      getData()
    }, [category,language]);

    const [movieList, setMovieList] = useState()
    
    const GetMoviesList = () => {
      GetMovieList().then((res)=>setMovieList(res?.data?.movies))
    }


    useEffect(()=>{
      GetMoviesList()

    },[])


    const getData = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
          )
        .then((res) => {
          setData(res.data.results);
        });
    };
  
    const row_titles = [
      { category: "Popular", language: "en" },
      { category: "Top Rated", language: "en" },
      { category: "Movies You Might Follow", language: "en" },
    ];
    let baseImgUrl = 'https://image.tmdb.org/t/p/original'
   console.log(movieList)

  let PopularMovieList = movieList?.filter((v)=>v.category == 'popular')
  let topRatedMovieList = movieList?.filter((v)=>v.category == 'topRated')
  
  return (
    <>
        <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            transitionTime={700}
            showThumbs={false}
        >
       {data.map((el, index) => (
          <Banner
          idm ={el.id}
          key={index}
          img={`${baseImgUrl}${el.backdrop_path}`}
          title={el.title || el.name}
          genre={el.genre}
          description={el.overview}
          mediaType = {el.media_type}
          />
          ))}
      </Carousel>

      <CardRows row_title={'Popular'} data={PopularMovieList} />
      <CardRows row_title={'Top Rated'} data={topRatedMovieList} />
  
    </>
  )
}

export default MainPage