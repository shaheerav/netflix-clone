import React,{ useEffect, useState } from 'react'
import { API_KEY ,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
const Banner = () => {
  const [movie,setMovie]=useState();
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random()* results.length);
      setMovie(results[randomIndex])
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}>
      <div className='content'>
        <h1 className='title'>{movie? movie.title:""}</h1>
        <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview :""}y.</h1>
      </div>
      <div className='fade_button'></div>
    </div>
  )
}

export default Banner
