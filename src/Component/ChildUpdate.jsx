import React, { useContext } from "react";
import { Data } from "./ContextAPI";

const ChildUpdate = () => {
  const { info, setInfo } = useContext(Data);

  const change = () => {
    setInfo("i am updated from my child component");
  };
  return (
    <>
      <button onClick={change}>change me</button>
    </>
  );
};
export default ChildUpdate;