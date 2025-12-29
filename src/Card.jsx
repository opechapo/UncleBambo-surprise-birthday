import { useState, useEffect } from "react";

function Card({ media, rot, offsetX, index, totalCards }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exiting after 4 seconds (so it stays visible for a while)
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Calculate z-index: newest card on top
  const zIndex = totalCards - index;

  return (
    <div
      className={`
        absolute 
        w-80 h-96 md:w-96 md:h-[520px] 
        bg-white rounded-2xl shadow-2xl overflow-hidden
        flex flex-col
        transition-all duration-1000 ease-out
        ${isExiting ? "opacity-0 translate-y-32 scale-90" : "opacity-100"}
      `}
      style={{
        zIndex,
        transform: isExiting
          ? `translateX(${
              offsetX * 2
            }%) translateY(100px) rotate(${rot}deg) scale(0.9)`
          : `translateX(${offsetX}%) rotate(${rot}deg)`,
        transition: "all 1.2s cubic-bezier(0.25, 0.8, 0.25, 1)",
      }}
    >
      {/* Image */}
      <div className="flex-1 relative">
        <img
          src={media.src}
          alt="Special memory with Uncle"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Caption below the image */}
      <div className="p-6 bg-white text-center">
        <p className="text-2xl font-bold text-gray-800 tracking-wide">
          A special memory ❤️
        </p>
      </div>
    </div>
  );
}

export default Card;
