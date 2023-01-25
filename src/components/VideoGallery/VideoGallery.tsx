import React, { useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Blurhash } from "react-blurhash";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import {
  GalleryScreen,
  ScreenContainer,
  VideoGalleryContainer,
} from "./styles";
import { videoFiles } from "../../data";

const VideoGallery = () => {
  const [playVideo, setPlayVideo] = useState<number>();
  const [videoLoading, setLoading] = useState<boolean>(true);
  const galleryRef = useRef<any>();

  const onLoaded = () => {
    setLoading(false);
  };

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
                <Blurhash
                  hash={
                    index % 2
                      ? "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                      : "U27UC_Tg00D$.AW?E1nN00EA%4~7ISMw%2-p"
                  }
                  width={287}
                  height={200}
                />
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: videoLoading ? 0 : 1,
                  }}
                  transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
                  onLoadedData={onLoaded}
                  className={
                    index === playVideo ? "screen zoomOutScreen" : "screen"
                  }
                  src={`/videos/${filename}.mp4`}
                  controls={playVideo !== undefined ? true : false}
                  autoPlay
                  loop
                  onClick={() => setPlayVideo(index)}
                  width={287}
                  height={200}
                />
                {/* <Screen
                  className={index === playVideo ? "zoomOutScreen" : ""}
                  src={`/videos/${filename}.mp4`}
                  controls={playVideo !== undefined ? true : false}
                  autoPlay
                  loop
                  onClick={() => setPlayVideo(index)}
                /> */}
              </ScreenContainer>
            ))}
          </GalleryScreen>
        </TransformComponent>
      </TransformWrapper>
    </VideoGalleryContainer>
  );
};

export default VideoGallery;
