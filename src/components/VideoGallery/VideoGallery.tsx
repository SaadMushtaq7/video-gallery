import React, { useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { RxCross1 } from "react-icons/rx";
import {
  GalleryScreen,
  ScreenContainer,
  VideoGalleryContainer,
  Screen,
} from "./styles";
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
      <TransformWrapper wheel={{ activationKeys: ["Shift"] }}>
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
              <ScreenContainer key={index}>
                <Screen
                  className={index === playVideo ? "zoomOutScreen" : ""}
                  src={`/videos/${filename}.mp4`}
                  controls={playVideo !== undefined ? true : false}
                  autoPlay
                  loop
                  onClick={() => setPlayVideo(index)}
                />
              </ScreenContainer>
            ))}
          </GalleryScreen>
        </TransformComponent>
      </TransformWrapper>
    </VideoGalleryContainer>
  );
};

export default VideoGallery;
