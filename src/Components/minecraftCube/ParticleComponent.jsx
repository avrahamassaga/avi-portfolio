import { useRef } from "react";
import anime from "animejs";

export const useParticles = (handleLast) => {
  const containerRef = useRef(null);

  const handleClick = () => {

    const particles = [];
    console.log('first',handleLast);

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      if (handleLast){
        particle.classList.add("particle-big");
      }
      else {
        particle.classList.add("particle");
      }
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    anime({
      targets: particles,
      translateX: () => anime.random(-200, 200),
      translateY: () => anime.random(-200, 200),
      scale: 0,
      duration: 1000,
      easing: "easeOutExpo",
      complete: () => {
        particles.forEach((particle) => {
          containerRef.current.removeChild(particle);
        });
      },
    });
  };

  return { containerRef, handleClick };
};


