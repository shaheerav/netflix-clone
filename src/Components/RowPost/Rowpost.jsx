import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import { API_KEY,imageUrl } from '../../constants/constants';
import './Rowpost.css'
import axios from '../../axios';

const Rowpost = (props) => {
  const [movies,setMovies]=useState([]);
  const [urlId,setUrlId]= useState('');
  useEffect(()=>{
    axios.get(props.url)
    .then(response=>{
      console.log(response.data);
      setMovies(response.data.results)

    }).catch(err=>{
      console.log('Network Error',err)
    })
  },[props.url]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('no trailer available')
      }
    })
    .catch(err => {
      console.error('Error fetching movie trailer:', err);
    });
  }
  return (
    <>
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {
        movies.map((obj) => (
          <div className='poster-container'>
          <img
          onClick={()=>handleMovie(obj.id)}
            key={obj.id}
            className={props.isSmall? 'smallPoster':'poster'}
            src={`${imageUrl + obj.backdrop_path}`}
            alt='poster'
          />
          <div className='movie-title-overlay'>
            <p>{obj.title}</p>
            </div>
          </div>
        ))}
            
        </div>
        {urlId && <Youtube videoId={urlId.key} opts={opts} />}
      
    </div>
    </>
  )
}

export default Rowpost
