import React, { FC } from "react";
import "./App.css";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import VideoGallery from "./components/VideoGallery/VideoGallery";
import TestFile from "./TestFile";

const App: FC = () => {
  return (
    // <div className="App">
    //   <TestimonialCard />
    //   <TestimonialCard />
    //   <TestimonialCard />
    //   <TestimonialCard />
    //   <TestimonialCard />
    // </div>
    <VideoGallery />
    //<TestFile />
  );
};

export default App;
