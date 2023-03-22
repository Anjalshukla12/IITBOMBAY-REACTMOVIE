import React, { useEffect, useState }  from 'react'
import { useSelector} from 'react-redux'
import Lazyload from '../../../components/lazy/Lazyload'
import useFetch from '../../../hooks/useFetch'
import Contentwrapper from '../../../components/contentwrapper/Contentwrapper'
import "./herobanner.scss"
import { useNavigate } from 'react-router-dom'



export default function HeroBanner() {

   const count = useSelector(state => state.home.imgurl) // accessing imgurl from homeslice 

   const [background,setbackground]  = useState("") // updating background in every refresh

   const [query,setquery]  = useState("")

   const {data,loading} = useFetch("/movie/upcoming") // calling custom hook for  calling api of  upcoming movie  for background image
                                                             

    const navigate = useNavigate()

   useEffect(()=>{
         const bg = count.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
         setbackground(bg)
   },[data]) // when data is  changed useffect is render

  

   const serachhandler = (e)=>{
      if(e.key === "Enter" && query.length>0){  // if the enter key is hit and input value lenght is not zero then condition will be true
             navigate(`/search/${query}`) //  and navigate to search result
      }
   }
  return (

    <div className='HeroBanner'>

        {!loading &&   
            <div className='bg-img'>
               <Lazyload src = {background}></Lazyload>
            </div>
        }
       
       <div className='opacity-layer'></div>

        <Contentwrapper>
         <div className="herobannercontent">
                <span className='title'>Welcome to Netflix</span>
                <span className='subtitle'> Millions of movies to discover
                        Explore now.</span>
                <div className='searchInput'>
                      <input type="text" placeholder='Search for amovie or tv show....' onChange={(e)=>setquery(e.target.value)} onKeyUp={serachhandler}></input>
                     <button>Search</button>
                </div>

            
          </div>
        </Contentwrapper>
    </div>
  )
}
