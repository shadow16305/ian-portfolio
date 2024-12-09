import { motion } from "motion/react";

import presentation from "../../assets/images/presentation.jpg";
import play from "../../assets/icons/play.svg";

interface PresentationVideoProps {
  showVideo: boolean;
  setShowVideo: (showVideo: boolean) => void;
}

export const PresentationVideo = ({
  showVideo,
  setShowVideo,
}: PresentationVideoProps) => {
  return showVideo ? (
    <div className="h-[390px] w-full">
      <iframe
        src="https://player.vimeo.com/video/1035594082?h=49eafaab97&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen;"
        className="absolute size-full top-0 left-0 object-cover"
        title="istockphoto-1937378454-640_adpp_is"
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <img
        src={presentation}
        alt="preview video thumbnail"
        className="w-full h-[390px]"
      />
      <img
        src={play}
        alt="play video"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:invert transitioan-all duration-300 z-10"
      />
      <div
        onClick={() => setShowVideo(true)}
        className="size-full bg-black absolute top-0 left-0 opacity-0 group-hover:opacity-50 transition-all duration-300"
      />
    </motion.div>
  );
};