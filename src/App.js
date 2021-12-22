import './App.css';
import {useFetchData} from './components/fetchData'
import PieChart from './components/PieChart'
import MyVega from './components/VizData';
import React,{useEffect,useState} from 'react';
import { VegaLite } from 'react-vega'
import dummyData from './components/dummy.json'




const App=()=> {
  const {loading,data} = useFetchData("https://gist.githubusercontent.com/pkumar11/c0290da9590fd78cb98a7b157aa97fe6/raw/populationIndia.csv")
  const {allData,setAllData} =  useState(dummyData)
  useEffect(()=>{
    let gg = dummyData
    gg.data.values=data;
    console.log(gg)
   

  },[data])

  console.log(data)
  return (
    <div className="App" >
      {data.length>0 ?<MyVega  allData={data} />:<></>}
      <PieChart/>
    </div>
  );
}

export default App;
