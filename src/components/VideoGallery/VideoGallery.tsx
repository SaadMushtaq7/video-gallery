import React, { useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { RxCross1 } from "react-icons/rx";
import { GalleryScreen, Screen, VideoGalleryContainer } from "./styles";
import { videoFiles } from "../../data";

const VideoGallery = () => {
  const [playVideo, setPlayVideo] = useState<number>();
  const galleryRef = useRef<any>();

  useEffect(() => {
    if (playVideo !== undefined) {
      galleryRef.current.scrollTo(0, 0);
    }
  }, [playVideo]);

  return (
    <VideoGalleryContainer>
      <video
        src="/videos/backgroundVideo.mp4"
        autoPlay
        muted
        loop
        id="bgVideo"
      />
      <div className="outerContainer">
        <TransformWrapper>
          <TransformComponent>
            <GalleryScreen
              ref={galleryRef}
              className={playVideo !== undefined ? "allowFullScreen" : ""}
            >
              {playVideo !== undefined && (
                <RxCross1
                  className="closeVideo"
                  onClick={() => setPlayVideo(undefined)}
                />
              )}
              {videoFiles.map((filename, index) => (
                <Screen
                  key={index}
                  className={index === playVideo ? "zoomOutScreen" : ""}
                  src={`/videos/${filename}.mp4`}
                  controls={playVideo !== undefined ? true : false}
                  autoPlay
                  loop
                  onClick={() => setPlayVideo(index)}
                />
              ))}
            </GalleryScreen>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </VideoGalleryContainer>
  );
};

export default VideoGallery;
