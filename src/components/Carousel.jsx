import { useRef } from "react";
import "../styles/Carousel.css";

export default function Carousel({ images, title }) {
  const trackRef = useRef(null);

  const scrollBySlide = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    const slideWidth = el.clientWidth;
    const maxScroll = el.scrollWidth - slideWidth;

    // Determine if we're at either end
    const atStart = el.scrollLeft === 0;
    const atEnd = el.scrollLeft >= maxScroll;

    if (dir === 1 && atEnd) {
      // Go back to start
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && atStart) {
      // Go to end
      el.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * slideWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel" aria-label={`${title} screenshots`}>
      <button
        className="carousel-btn carousel-btn--prev"
        onClick={() => scrollBySlide(-1)}
        aria-label="Previous image"
      >
        ‹
      </button>

      <div className="carousel-viewport" ref={trackRef} tabIndex={0}>
        <div className="carousel-track">
          {images.map((src, i) => (
            <div className="carousel-slide" key={i}>
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-btn carousel-btn--next"
        onClick={() => scrollBySlide(1)}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}
