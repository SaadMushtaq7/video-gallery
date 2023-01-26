import React, { FC } from "react";
import VideoGallery from "./components/VideoGallery/VideoGallery";
import "./App.css";

const App: FC = () => {
  return <VideoGallery rowSize={5} />;
};

export default App;
