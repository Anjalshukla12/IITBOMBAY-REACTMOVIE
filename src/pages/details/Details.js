import React from "react";
import { useParams } from "react-router-dom";


import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./DetailsBanner";


const Details = () => {
    const {id } = useParams();
    const {data:credits,loading:creditloading} = useFetch(`/movie/${id}/credits`)

 
    return (
        <div>
        <DetailsBanner crew={credits?.crew}></DetailsBanner>
           
        </div>
    );
};

export default Details;