import React, { useRef, useState } from "react";
const Show = () => {
  const out = useRef();
  const [data, setData] = useState("");
  const handlechange = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <label htmlFor="input">Input :</label>
      <input onChange={handlechange} type="text" id="input" />
      <p>{data}</p>
    </>
  );
};

export default Show;