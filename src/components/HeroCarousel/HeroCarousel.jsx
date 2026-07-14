// components/HeroCarousel/HeroCarousel.jsx
import React, { useState, useEffect } from "react";
import { HERO_SLIDES } from "../../data/siteData";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);

  const slide = HERO_SLIDES[current];

  return (
    <div className="hero-carousel">
      <div
        className="hero-slide"
        style={{
          backgroundImage: `${slide.gradient}, url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        key={slide.id}
      >
        <div className="hero-slide-inner">
          <div className="hero-tag">{slide.tag}</div>
          <div className="hero-emoji">{slide.emoji}</div>
          <h2 className="hero-headline">{slide.headline}</h2>
          <p className="hero-sub">{slide.sub}</p>
          <a className="hero-cta" href="#">{slide.cta}</a>
        </div>
      </div>

      <button className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Previous">‹</button>
      <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next">›</button>

      <div className="hero-dots">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-fade-bottom" />
    </div>
  );
}
