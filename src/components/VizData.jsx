import * as vega from "vega";
import React, { useEffect, useState } from "react";
import dummyData from "./dummy.json";

const MyVega = (props) => {
  const [data, setData] = useState(dummyData);
  console.log(data,props.allData)

  useEffect(() => {
      let gg = dummyData;
      gg.data[0].values=props.allData
      console.log(gg)
    const view = new vega.View(vega.parse(gg), {
      renderer: "svg", // renderer (canvas or svg)
      container: "#view", // parent DOM container
      hover: true // enable hover processing
    });
    setData(gg)
    return view.runAsync();
  }, [data]);

  const onColorChange = (e) => {
    let value = e.target.value;
    setData((prevState) => {
      prevState.marks[0].encode.update.fill.value = value;
      return { ...prevState };
    });
  };

  const onHoverColorChange = (e) => {
    let value = e.target.value;
    setData((prevState) => {
      prevState.marks[0].encode.hover.fill.value = value;
      return { ...prevState };
    });
  };

  const addWidth = (e) => {
    let value = e.target.value;
    setData((prevState) => {
      prevState.width = value;
      return { ...prevState };
    });
  };

  const addHeight = (e) => {
    let value = e.target.value;
    setData((prevState) => {
      prevState.height = value;
      return { ...prevState };
    });
  };

  const onBackgroundChange = (e) => {
    let value = e.target.value;
    setData((prevState) => {
      prevState.background = value;
      return { ...prevState };
    });
  };

  const changeType = (e) => {
    const value = e.target.value;
    setData((prevState) => {
      prevState.marks[0].type = value;
      return { ...prevState };
    });
  };
  return (
    <div>
      <div
        style={{
          margin: 2,

          padding: 15,
          border: "1px solid #212121"
        }}
      >
        {data.width} = width:
        <input
          type="range"
          id="vol"
          name="vol"
          min="200"
          value={data.width}
          max="1050"
          onChange={addWidth}
        />
      </div>
      <div
        style={{
          margin: 2,
          padding: 15,
          border: "1px solid #212121"
        }}
      >
        {data.height} = height:
        <input
          type="range"
          id="vol2"
          name="vol2"
          value={data.height}
          min="100"
          max="1050"
          onChange={addHeight}
        />
      </div>
      <div
        style={{
          margin: 2,

          padding: 15,
          border: "1px solid #212121"
        }}
      >
        type={data.marks[0].type} :
        <select id="graph" name="typeList" onChange={changeType}>
          <option value="rect">rect</option>
          <option value="trail">trail</option>
          <option value="arc">arc</option>
          <option value="area">area</option>
          <option value="image">image</option>
          <option value="group">group</option>
          <option value="line">line</option>
          <option value="path">path</option>

          <option value="rule">rule</option>
          <option value="shape">shape</option>
          <option value="symbol">symbol</option>
          <option value="text">text</option>
        </select>
      </div>
      <div
        style={{
          margin: 2,

          padding: 15,
          border: "1px solid #212121"
        }}
      >
        background:
        <input
          value={data.background}
          type="color"
          onChange={onBackgroundChange}
        />
      </div>
      <div
        style={{
          margin: 2,

          padding: 15,
          border: "1px solid #212121"
        }}
      >
        color:
        <input
          value={data.marks[0].encode.update.fill.value}
          type="color"
          onChange={onColorChange}
        />
      </div>
      <div
        style={{
          margin: 2,

          padding: 15,
          border: "1px solid #212121"
        }}
      >
        {data.marks[0].encode.hover.fill.value} hover-color:
        <input
          type="color"
          value={data.marks[0].encode.hover.fill.value}
          onChange={onHoverColorChange}
        />
      </div>
      <div
        id="view"
        style={{
          width: "auto",
          display: "flex"
        }}
      />
    </div>
  );
};

export default MyVega;
