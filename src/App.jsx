import { useState, useEffect } from "react";
import Card from "./Card";

// Images
import UncleBambo1 from "./assets/UncleBambo1.jpeg";
import UncleBambo2 from "./assets/UncleBambo2.jpeg";
import UncleBambo3 from "./assets/UncleBambo3.jpeg";
import UncleBambo4 from "./assets/UncleBambo4.jpeg";
import UncleBambo5 from "./assets/UncleBambo5.png";
import UncleBambo6 from "./assets/UncleBambo6.png";
import UncleBambo7 from "./assets/UncleBambo7.png";
import UncleBambo8 from "./assets/UncleBambo8.png";
import UncleBambo9 from "./assets/UncleBambo9.png";
import UncleBambo10 from "./assets/UncleBambo10.png";
import UncleBambo11 from "./assets/UncleBambo11.png";
import UncleBambo12 from "./assets/UncleBambo12.png";
import UncleBambo13 from "./assets/UncleBambo13.png";
import UncleBambo14 from "./assets/UncleBambo14.png";
import UncleBambo15 from "./assets/UncleBambo15.png";
import UncleBambo16 from "./assets/UncleBambo16.png";
import UncleBambo17 from "./assets/UncleBambo17.png";

// Videos
import Video1 from "./assets/videos/UncleBamboVideo1.mp4";
import Video2 from "./assets/videos/UncleBamboVideo2.mp4";
import Video3 from "./assets/videos/UncleBamboVideo3.mp4";
import Video4 from "./assets/videos/UncleBamboVideo4.mp4";
import Video5 from "./assets/videos/UncleBamboVideo5.mp4";
import Video6 from "./assets/videos/UncleBamboVideo6.mp4";

function App() {
  const [cards, setCards] = useState([]);
  const [mode, setMode] = useState("photos"); // "photos" or "videos"
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const photoList = [
    { src: UncleBambo1, type: "image" },
    { src: UncleBambo2, type: "image" },
    { src: UncleBambo3, type: "image" },
    { src: UncleBambo4, type: "image" },
    { src: UncleBambo5, type: "image" },
    { src: UncleBambo6, type: "image" },
    { src: UncleBambo7, type: "image" },
    { src: UncleBambo8, type: "image" },
    { src: UncleBambo9, type: "image" },
    { src: UncleBambo10, type: "image" },
    { src: UncleBambo11, type: "image" },
    { src: UncleBambo12, type: "image" },
    { src: UncleBambo13, type: "image" },
    { src: UncleBambo14, type: "image" },
    { src: UncleBambo15, type: "image" },
    { src: UncleBambo16, type: "image" },
    { src: UncleBambo17, type: "image" },
  ];

  const videoList = [
    { src: Video1, type: "video" },
    { src: Video2, type: "video" },
    { src: Video3, type: "video" },
    { src: Video4, type: "video" },
    { src: Video5, type: "video" },
    { src: Video6, type: "video" },
  ];

  // Photo carousel effect
  useEffect(() => {
    if (mode !== "photos") return;

    let cardId = 0;
    const interval = setInterval(() => {
      const randomMedia =
        photoList[Math.floor(Math.random() * photoList.length)];
      const randomRot = Math.random() * 20 - 10;
      const offsetX = Math.random() * 40 - 20;

      setCards((prev) => [
        ...prev,
        { id: cardId++, media: randomMedia, rot: randomRot, offsetX },
      ]);

      setTimeout(() => {
        setCards((prev) => prev.slice(1));
      }, 7000);
    }, 2800);

    return () => clearInterval(interval);
  }, [mode]);

  // Auto-loop videos
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) =>
      prev === videoList.length - 1 ? 0 : prev + 1
    );
  };

  // Manual navigation
  const goToPreviousVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videoList.length - 1 : prev - 1
    );
  };

  const goToNextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === videoList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Title */}
      <h1 className="text-white text-4xl md:text-7xl font-bold absolute top-8 left-1/2 -translate-x-1/2 z-50 text-center drop-shadow-2xl leading-tight">
        Happy 60th Birthday,
        <br className="md:hidden" /> Uncle Bambo! 🎉
      </h1>

      {/* ====================== PHOTO MODE ====================== */}
      {mode === "photos" && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                media={card.media}
                rot={card.rot}
                offsetX={card.offsetX}
                index={index}
                totalCards={cards.length}
              />
            ))}
          </div>

          {/* Arrow to Videos */}
          <button
            onClick={() => {
              setMode("videos");
              setCurrentVideoIndex(0);
            }}
            className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-50 
                       bg-white/90 hover:bg-white text-purple-700 
                       w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl 
                       flex items-center justify-center text-4xl md:text-5xl
                       transition-all duration-300 hover:scale-110"
            aria-label="Watch videos"
          >
            ▶
          </button>
        </>
      )}

      {/* ====================== VIDEO MODE ====================== */}
      {mode === "videos" && (
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 px-8 md:px-16">
          {/* Video - now lower and smaller to leave room below */}
          <div className="relative w-full max-w-5xl mb-8">
            <div className="aspect-video max-h-[60vh]">
              {" "}
              {/* Maintains aspect ratio */}
              <video
                key={currentVideoIndex}
                src={videoList[currentVideoIndex].src}
                className="w-full h-full object-contain rounded-3xl shadow-2xl bg-black"
                autoPlay
                muted={false}
                playsInline
                onEnded={handleVideoEnd}
              />
            </div>

            {/* Video Counter */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-5 py-3 rounded-full text-xl font-semibold">
              {currentVideoIndex + 1} / {videoList.length}
            </div>
          </div>

          {/* Caption + Controls Grouped Closely Together */}
          <div className="flex flex-col items-center gap-6">
            {/* Caption */}
            <div className="bg-white/90 px-10 py-5 rounded-full shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
                Videos from Family and Friends ❤️
              </p>
            </div>

            {/* Previous & Next Arrows */}
            <div className="flex items-center gap-12 md:gap-20">
              <button
                onClick={goToPreviousVideo}
                className="bg-white/90 hover:bg-white text-purple-700 
                           w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl 
                           flex items-center justify-center text-4xl md:text-5xl
                           transition-all duration-300 hover:scale-110"
                aria-label="Previous video"
              >
                ◀
              </button>

              <button
                onClick={goToNextVideo}
                className="bg-white/90 hover:bg-white text-purple-700 
                           w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl 
                           flex items-center justify-center text-4xl md:text-5xl
                           transition-all duration-300 hover:scale-110"
                aria-label="Next video"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Back to Photos Arrow */}
          <button
            onClick={() => setMode("photos")}
            className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-50 
                       bg-white/90 hover:bg-white text-purple-700 
                       w-14 h-14 md:w-18 md:h-18 rounded-full shadow-2xl 
                       flex items-center justify-center text-3xl md:text-4xl
                       transition-all duration-300 hover:scale-110"
            aria-label="Back to photos"
          >
            ◀
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
