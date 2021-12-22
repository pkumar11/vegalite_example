import React,{useState,useEffect} from 'react'
import {csv} from 'd3'


export const useFetchData = (url)=> {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])

    const fetchDataFromUrl = async()=>{
        const response = await csv(url);
        // const pro = await response.json();
        console.log(response[0])
        setLoading(false);
        setData(response)
    }
    useEffect(()=>{
        fetchDataFromUrl()
    },[url])
    return {loading,data}
}

