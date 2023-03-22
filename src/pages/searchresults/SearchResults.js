import React from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import "./searchresult.scss"
import { fetchdata } from '../../api'
import Contentwrapper from '../../components/contentwrapper/Contentwrapper'
import Moviecard from '../../components/moviecard/Moviecard'
import Spinner from '../../components/spinner/Spinner'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchdataquery } from '../../api'

export default function SearchResults() {

  const [data,setData] = useState(null)
  const [loading,setloading] = useState(false)
  const [pagenum,setpagenum] = useState(1)
  const {query} = useParams()

  const FetchInitialData = ()=>{
    setloading(true)

    // search query api is not working
    fetchdataquery(`https://api.themoviedb.org/3/search/movie?api_key=b50718a3fce1ad2e1cddb5da6d4b5aa8&q=${query}&page=${pagenum}`).then((res)=>{
                       
    setData(res)
      setpagenum((p)=>p+1)
      setloading(false)
    })
}

const fetchNextpage = ()=>{
  fetchdata(`https://api.themoviedb.org/3/search/movie?api_key=b50718a3fce1ad2e1cddb5da6d4b5aa8&q=${query}&page=${pagenum}`).then((res)=>{
   if(data?.results){
    setData({
     ...data,results: [...data?.results, ...res.results]
    })
   } else{
    setData(res)
   }
   setpagenum((p)=>p+1)
  })
}
useEffect(()=>{
 FetchInitialData()
},[query])

  return (
    <div className="searchResultsPage">
    {loading && <Spinner initial={true} />}
    {!loading && (
        <Contentwrapper>
            {data?.results?.length > 0 ? (
                <>
                    <div className="pageTitle">
                        {`Search ${
                            data?.total_results > 1
                                ? "results"
                                : "result"
                        } of '${query}'`}
                    </div>
                    
                    <InfiniteScroll
                        className="content"
                        dataLength={data?.results?.length || []}
                        next={fetchNextpage}
                        hasMore={pagenum <= data?.total_pages}
                        loader={<Spinner />}
                    >
                        {data?.results.map((item, index) => {
                            if (item.media_type === "person") return;
                            return (
                                <Moviecard
                                    key={index}
                                    data={item}
                                    fromSearch={true}
                                />
                            );
                        })}
                    </InfiniteScroll>
                </>
            ) : (
                <span className="resultNotFound">
                    Sorry, Results not found!
                </span>
            )}
        </Contentwrapper>
    )}
</div>
  )
}

