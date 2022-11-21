import { useState } from "react";
import FolderStructure from "./FolderStructure";
import { data } from "./mockData/data";
import "./styles.css";

export default function App() {
  const [folderData, setFolderData] = useState(data);
  const wrapperFunction = (obj, id) => {
    const tempobj = [...folderData];
    const handleInsertNode = (obj, id, tempobj) => {
      console.log(obj, tempobj);
      for (let i = 0; i < tempobj?.length; i++) {
        if (tempobj[i].id == id) {
          console.log("$$$");
          if (tempobj[i].children) {
            tempobj[i].children.unshift(obj);
          } else {
            tempobj[i].children = [obj];
          }
          return;
        } else {
          handleInsertNode(obj, id, tempobj[i]?.children);
        }
      }
    };
    handleInsertNode(obj, id, tempobj);
    console.log(tempobj, "final");
    setFolderData(tempobj);
  };

  return (
    <div className="App">
      <FolderStructure folders={folderData} wrapperFunction={wrapperFunction} />
    </div>
  );
}
