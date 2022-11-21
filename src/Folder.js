import React, { useState } from "react";
import FolderStructure from "./FolderStructure";
const Folder = ({ item, wrapperFunction }) => {
  const [showChildren, setshowChildren] = useState(true);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });
  const addFileorFolder = (isitFolder) => {
    setShowInput({ visible: true, isFolder: isitFolder });
  };
  const toggleChildren = (e) => {
    setshowChildren((c) => !c);
  };
  const onaddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //add logic
      //name,isFolder,item.id //
      const obj = {
        name: e.target.value,
        isFolder: showInput.isFolder,
        id: new Date().getTime()
      };
      console.log(item.id, "###");
      wrapperFunction(obj, item.id);
      setShowInput({ ...showInput, visible: false });
    }
  };
  return (
    <>
      <div
        className={item.isFolder ? "folder" : "file"}
        onClick={toggleChildren}
      >
        {item.name}
      </div>
      {item.isFolder && (
        <div style={{ display: "inline" }}>
          <button onClick={() => addFileorFolder(true)}>+Folder</button>
          <button onClick={() => addFileorFolder(false)}>+File</button>
        </div>
      )}
      {item.isFolder && showInput.visible && (
        <input
          type="text"
          style={{ "margin-left": "1rem" }}
          autoFocus
          onKeyDown={onaddFolder}
          onBlur={() => setShowInput({ ...showInput, visible: false })}
        />
      )}
      {item.children && showChildren && (
        <div style={{ "margin-left": "1rem" }}>
          <FolderStructure
            folders={item.children}
            wrapperFunction={wrapperFunction}
          />
        </div>
      )}
    </>
  );
};
export default Folder;
