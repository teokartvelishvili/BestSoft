import React, { useEffect, useState } from 'react';
import './CircleSquare.css';

const colors = ['rgba(255, 99, 146, 1)', 'rgba(90, 169, 230, 1)', 'rgba(123, 97, 255, 1)', 'rgba(255, 222, 61, 1)'];
const words = ['HTML', 'CSS', 'JS', 'React','Angular', 'Next.js', 'Node.js', 'C#', 'Python', 'MongoDB', 'SQL', 'UX/UI', 'Figma', 'Photoshop', 'Illustrator'];
const getRandomDirection = () => Math.random() * 0.3 - 0.15; // Slower random direction between -0.15 and 0.15
const sizes = [40, 80, 120, 160]; // Small, Medium, Large, Extra Large

const Circle = ({ circle, handleMouseOver }) => {
  return (
    <div
      className="moving-circle"
      onMouseOver={(e) => handleMouseOver(e)}
      style={{
        backgroundColor: circle.color,
        opacity: 0.7, 
        width: circle.size,
        height: circle.size,
        top: circle.y,
        left: circle.x,
        position: 'absolute',
        borderRadius: '50%',
        transition: 'transform 0.2s ease-out',
      }}
    />
  );
};

const Word = ({ word, handleMouseOver }) => {
  return (
    <div
      className="moving-word"
      onMouseOver={(e) => handleMouseOver(e)}
      style={{
        top: word.y,
        left: word.x,
        position: 'absolute',
        fontSize: '24px', // Larger font size
        fontWeight: 'bold',
        color: '#1b0a4870', // Darker color for better contrast
        fontFamily: 'Arial, sans-serif', // Font family
        transition: 'transform 0.2s ease-out',
      }}
    >
      {word.text}
    </div>
  );
};

const PricingWord = ({ letter, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={`pricing-letter ${hovered ? 'hovered' : ''}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      key={index}
    >
      {letter}
    </span>
  );
};

const CircleSquare = () => {
  const [circles, setCircles] = useState([]);
  const [wordsState, setWordsState] = useState([]);

  useEffect(() => {
    const initialCircles = [];
    const initialWords = [];
    let sizeIndex = 0;

    // Create circles with different sizes
    for (let i = 0; i < 40; i++) {
      if (i % 10 === 0 && i !== 0) sizeIndex++; // Every 10 circles, increase the size category
      initialCircles.push({
        x: Math.random() * (window.innerWidth * 0.9 - sizes[sizeIndex]),
        y: Math.random() * (window.innerHeight * 0.7 - sizes[sizeIndex]),
        dx: getRandomDirection(),
        dy: getRandomDirection(),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: sizes[sizeIndex],
      });
    }

    // Create words with random positions
    for (let i = 0; i < words.length; i++) {
      initialWords.push({
        x: Math.random() * (window.innerWidth * 0.9 - 50),
        y: Math.random() * (window.innerHeight * 0.7 - 20),
        dx: getRandomDirection(),
        dy: getRandomDirection(),
        text: words[i],
      });
    }

    setCircles(initialCircles);
    setWordsState(initialWords);
  }, []);

  useEffect(() => {
    const moveCirclesAndWords = () => {
      // Move circles
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let { x, y, dx, dy, size } = circle;

          // Update position
          x += dx;
          y += dy;

          // Reverse direction if it hits the border of the square
          if (x <= 0 || x + size >= window.innerWidth * 0.9) dx = -dx;
          if (y <= 0 || y + size >= window.innerHeight * 0.7) dy = -dy;

          return { ...circle, x, y, dx, dy };
        })
      );

      // Move words
      setWordsState((prevWords) =>
        prevWords.map((word) => {
          let { x, y, dx, dy } = word;

          // Update position
          x += dx;
          y += dy;

          // Reverse direction if it hits the border of the square
          if (x <= 0 || x + 50 >= window.innerWidth * 0.9) dx = -dx;
          if (y <= 0 || y + 20 >= window.innerHeight * 0.7) dy = -dy;

          return { ...word, x, y, dx, dy };
        })
      );

      requestAnimationFrame(moveCirclesAndWords); // Continue the animation loop
    };

    requestAnimationFrame(moveCirclesAndWords);
  }, []);

  const handleMouseOverCircle = (e, index) => {
    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      const circleElem = e.target.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Only change movement of the specific circle
      const dx = mouseX < circleElem.x ? 0.5 : -0.5;
      const dy = mouseY < circleElem.y ? 0.5 : -0.5;
      newCircles[index] = { ...newCircles[index], dx, dy };
      return newCircles;
    });
  };

  const handleMouseOverWord = (e, index) => {
    setWordsState((prevWords) => {
      const newWords = [...prevWords];
      const wordElem = e.target.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Only change movement of the specific word
      const dx = mouseX < wordElem.x ? 0.5 : -0.5;
      const dy = mouseY < wordElem.y ? 0.5 : -0.5;
      newWords[index] = { ...newWords[index], dx, dy };
      return newWords;
    });
  };

  return (
    <div className="moving-square-with-words">
      {/* Pricing Word */}
      <div className="pricing-container">
        {'PRICING'.split('').map((letter, index) => (
          <PricingWord letter={letter} index={index} key={index} />
        ))}
      </div>

      {circles.map((circle, index) => (
        <Circle
          key={index}
          circle={circle}
          handleMouseOver={(e) => handleMouseOverCircle(e, index)}
        />
      ))}
      {wordsState.map((word, index) => (
        <Word
          key={index}
          word={word}
          handleMouseOver={(e) => handleMouseOverWord(e, index)}
        />
      ))}
    </div>
  );
};

export default CircleSquare;
