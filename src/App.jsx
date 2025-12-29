import { useState, useEffect } from "react";
import Card from "./Card";

// Import all your images
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

function App() {
  const [cards, setCards] = useState([]);

  const mediaList = [
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

  useEffect(() => {
    let cardId = 0;

    const interval = setInterval(() => {
      const randomMedia =
        mediaList[Math.floor(Math.random() * mediaList.length)];

      // Random slight rotation and final position for variety
      const randomRot = Math.random() * 20 - 10; // -10 to +10 degrees
      const offsetX = Math.random() * 40 - 20; // Small horizontal drift

      setCards((prevCards) => [
        ...prevCards,
        {
          id: cardId++,
          media: randomMedia,
          rot: randomRot,
          offsetX,
        },
      ]);

      // Remove oldest card after 7 seconds
      setTimeout(() => {
        setCards((prev) => prev.slice(1));
      }, 7000);
    }, 2800); // New card every ~2.8 seconds for smooth overlap

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Main Title */}
      <h1 className="text-white text-5xl md:text-7xl font-bold absolute top-8 left-1/2 -translate-x-1/2 z-50 text-center drop-shadow-2xl">
        Happy 60th Birthday, Uncle Bambo! 🎉
      </h1>

      {/* Cards Container */}
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
    </div>
  );
}

export default App;
