import React, { useState, useEffect } from "react";
import List from "../components/List.tsx";
import Topbar from "../components/Topbar.tsx";

const SceneList = () => {
  const [scene, setScene] = useState<string>(
    localStorage.getItem("scene") || "coffee"
  );

  const handleSceneChange = (newScene: string) => {
    setScene(newScene);
  };

  useEffect(() => {
    localStorage.setItem("scene", scene);
  }, [scene]);

  return (
    <>
      <Topbar onSceneChange={handleSceneChange} scene={scene} />
      <List scene={scene} />
    </>
  );
};

export default SceneList;