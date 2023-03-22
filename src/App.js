import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchdata } from "./api.js";
import Home from "./pages/home/Home";
import { getApiConfiguration, getGeneres } from "./store/homeslice.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./pages/searchresults/SearchResults.js";
import Details from "./pages/details/Details.js";

function App() {
 

   const dispatch = useDispatch()
  useEffect(()=>{
    fetchdata("/configuration").then((res)=>{
      console.log(res)
      const iurl = {
        backdrop :res.images.secure_base_url + "original",
        poster :res.images.secure_base_url + "original",
       
      }
      dispatch(
        getApiConfiguration(iurl) // calling configuration end point for image url and storing in home slice for global access
      )
    })
  },[])


  var g = {}
  useEffect(()=>{
    fetchdata(`/genre/movie/list`).then((res)=>{
     const h = res.genres
      h.map((i)=>{
            return   g[i.id] = i
        })
       
    console.log(g)
      dispatch(
        getGeneres(g)
      )
    })
  },[])

    

   return(
    <BrowserRouter>
    
 <Routes>
    <Route path = "/" element = {<Home></Home>}></Route>
    <Route path = "/search/:query" element = {<SearchResults></SearchResults>}></Route>

    <Route path = "/:id" element = {<Details></Details>}></Route>
 </Routes>
      
    </BrowserRouter>
   )
       
        

}

export default App;
