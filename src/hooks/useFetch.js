import React, { useEffect, useState } from 'react'
import { fetchdata } from '../api'

export default function useFetch(url) {
const[data,setdata] = useState(null)
const[loading,setloading] = useState(null)
const[error,seterror] = useState(null)

useEffect(()=>{
  console.log("fetch")
     setloading("....loading")
     setdata(null)
     seterror(null)
     
     fetchdata(url).then((res)=>{
             setloading(false)
             setdata(res)
    }).catch((e)=>{
 setloading(false)
 seterror("erroorrrr")
    })
},[url])

  return {data,loading,error}
}
