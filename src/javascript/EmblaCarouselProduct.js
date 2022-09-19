import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons.js";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";
import "../css/Embla.css";

const EmblaCarousel = (object) => {
  const slides = object.slides[0];
  const mediaByIndex = object.slides[1];
  const navigate = useNavigate();
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner" >
                <img
                  className="embla__slide__img"
                  src={mediaByIndex(0)[index]}
                  alt=""
                />
                {mediaByIndex(1) !== 0 ? (<div className="promotion">{mediaByIndex(1)+'%'}</div>) : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;