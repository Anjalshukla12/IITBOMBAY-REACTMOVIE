import axios from "axios"


const BASE_URL =  "https://api.themoviedb.org/3?api_key=b50718a3fce1ad2e1cddb5da6d4b5aa8"
const token= process.env.API_TOKEN ;

const a =    BASE_URL.indexOf(3)

const newString = BASE_URL.substring(0,a+1)
const APIKey = BASE_URL.substring(a+1)



 

 export const fetchdata = async(url,params)=>{
     
      try{
       const {data}= await axios.get(newString+url+APIKey ,{
            params
       })
     return data
      }
      catch(e){
          console.log(e)
 return e
      }
 }


 
 

 export const fetchdataquery = async(url,params)=>{
     
     try{
      const {data}= await axios.get(url ,{
          params
      })
    return data
     }
     catch(e){
         console.log(e)
return e
     }
}