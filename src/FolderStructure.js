import React from "react";
import Folder from "./Folder";
const FolderStructure = ({ folders, wrapperFunction }) => {
  console.log(wrapperFunction, "finall");

  return (
    <div>
      {folders.map((item, idx) => {
        return (
          <div key={idx}>
            <Folder item={item} wrapperFunction={wrapperFunction} />
          </div>
        );
      })}
    </div>
  );
};
export default FolderStructure;
