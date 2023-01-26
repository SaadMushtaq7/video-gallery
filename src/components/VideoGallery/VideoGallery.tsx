import React, { FC, useEffect, useRef, useState, createRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Blurhash } from "react-blurhash";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { fetchClassesForVideo } from "../../helperFunctions/helper";
import {
  GalleryScreen,
  ScreenContainer,
  VideoGalleryContainer,
} from "./styles";
import { videoFiles } from "../../data";

type videoGalleryProps = {
  rowSize: number;
};

const VideoGallery: FC<videoGalleryProps> = ({ rowSize }) => {
  const [playVideo, setPlayVideo] = useState<number>();
  const [videoLoading, setLoading] = useState<boolean>(true);

  const containerRef = useRef<any>();
  const galleryRef = useRef<any>();
  const videosRef = useRef(
    [...Array(videoFiles.length)].map(() => createRef<HTMLDivElement>())
  );

  const onLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (playVideo !== undefined) {
      galleryRef.current.scrollTo(0, 0);
    }
  }, [playVideo]);

  return (
    <VideoGalleryContainer ref={containerRef}>
      <TransformWrapper wheel={{ activationKeys: ["Shift"] }}>
        <TransformComponent>
          <GalleryScreen
            ref={galleryRef}
            className={playVideo !== undefined ? "allowFullScreen" : ""}
            style={{ gridTemplateColumns: `repeat(${rowSize},1fr)` }}
          >
            {playVideo !== undefined && (
              <RxCross1
                className="closeVideo"
                onClick={() => setPlayVideo(undefined)}
              />
            )}
            {videoFiles.map((filename, index) => (
              <ScreenContainer
                ref={videosRef.current[index]}
                className={
                  index === playVideo
                    ? "zoomOutScreen"
                    : index % 3
                    ? "grid-row-span-2"
                    : "grid-row-span-3"
                }
                key={index}
              >
                <Blurhash
                  hash={
                    index % 2
                      ? "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                      : "U27UC_Tg00D$.AW?E1nN00EA%4~7ISMw%2-p"
                  }
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "5px" }}
                />
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: videoLoading ? 0 : 1,
                  }}
                  transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
                  onLoadedData={onLoaded}
                  className={
                    index === playVideo
                      ? "screenWithoutHover"
                      : fetchClassesForVideo(
                          index,
                          playVideo,
                          videosRef.current[index],
                          containerRef
                        )
                  }
                  src={`/videos/${filename}.mp4`}
                  controls={playVideo !== undefined ? true : false}
                  autoPlay
                  loop
                  onClick={() => setPlayVideo(index)}
                  height={"100%"}
                  width={`100/${rowSize}%`}
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
