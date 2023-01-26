import React, { FC } from "react";
import VideoGallery from "./components/VideoGallery/VideoGallery";
import "./App.css";

const App: FC = () => {
  return <VideoGallery rowSize={9} />;
};

export default App;
