import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const Walkthrough: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    "Swipe into your future",
    "Swipe into your future 2",
    "Swipe into your future 3",
    "Swipe into your future 4"
  ];

  const handleNext = () => {
    navigate('/crtprof'); // Navigate to profile creation page
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
  });

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white text-gray-800" {...handlers}>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl mb-4">{slides[currentSlide]}</h1>
      </div>
      <div className="flex flex-col items-center mb-8 w-full px-4">
        <div className="flex justify-center space-x-3 mb-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-full max-w-md p-4 bg-white text-black border border-black rounded hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Walkthrough;