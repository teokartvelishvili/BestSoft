import React, { useEffect, useCallback } from 'react';
import './CircleEffect.css';

const CircleEffect = () => {
  let lastMoveTime = 0; 

  const handleMouseMove = useCallback((e) => {
    const currentTime = Date.now();

    // ზღუდავთ რგოლების სიხშირეს
    if (currentTime - lastMoveTime < 100) return;
    lastMoveTime = currentTime;

    const circle = document.createElement('span');
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // Define the colors array
    const colors = ['rgba(255, 99, 146, 1)', 'rgba(90, 169, 230, 1)', 'rgba(123, 97, 255, 1)', 'rgba(255, 222, 61, 1)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.background = randomColor;

    // Set the size and class
    const size = Math.random() * 80;
    circle.style.width = `${20 + size}px`;
    circle.style.height = `${20 + size}px`;
    circle.className = 'circle';

    // Append the circle to the document
    document.body.appendChild(circle);

    // Remove the circle after 3 seconds
    setTimeout(() => circle.remove(), 3000);
  }, [lastMoveTime]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return null;
};

export default CircleEffect;
