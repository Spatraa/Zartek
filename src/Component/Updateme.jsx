import React from "react";
import ChildUpdate from "./ChildUpdate";
import { useContext } from "react";
import { Data } from "./ContextAPI";

const Updateme = () => {
  const { info, setInfo } = useContext(Data);
  return (
    <>
      <h1>{info}</h1>
      <ChildUpdate />
    </>
  );
};

export default Updateme;