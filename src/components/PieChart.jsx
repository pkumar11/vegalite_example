import * as vega from "vega";
import React, { useEffect, useState } from "react";
import pieChartJson from "./pieChartJson.json";

const PieChart = (props)=>{
    const [data, setData] = useState(pieChartJson);
    console.log(data,props.allData)
  
    useEffect(() => {
        // let gg = dummyData;
        // gg.data[0].values=props.allData
        // console.log(gg)
      const view = new vega.View(vega.parse(data), {
        renderer: "svg", // renderer (canvas or svg)
        container: "#pie", // parent DOM container
        hover: true // enable hover processing
      });
    //   setData(gg)
      return view.runAsync();
    }, [data]);

    return(
        <div
        id="pie"
        style={{
          width: "auto",
          display: "flex"
        }}
      />
    )
}

export default PieChart