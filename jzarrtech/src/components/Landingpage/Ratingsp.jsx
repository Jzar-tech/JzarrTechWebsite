import React, { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { defaultTestimonials, ReviewModalButton } from "../Testimonials";
import "../Testimonials.css";
import "./Ratingsp.css";

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

export default function Ratingsp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviews, setReviews] = useState(defaultTestimonials);

  const visibleReviews = useMemo(() => {
    return [0, 1, 2].map((offset) => {
      const index = (activeIndex + offset) % reviews.length;
      return reviews[index];
    });
  }, [activeIndex, reviews]);

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="landing-ratings" id="reviews">
      <div className="landing-ratings__header">
        <h2>
          See Why Clients
          <span>Choose Us!</span>
        </h2>

        <div className="landing-ratings__google" aria-label="Google rating 4.9 out of 5">
          <div className="landing-ratings__brand">
            <span className="google-blue">G</span>
            <span className="google-red">o</span>
            <span className="google-yellow">o</span>
            <span className="google-blue">g</span>
            <span className="google-green">l</span>
            <span className="google-red">e</span>
            <strong>Ratings</strong>
          </div>

          <div className="landing-ratings__score">
            <div className="landing-ratings__score-main">
              <strong>4.9</strong>
              <span>
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </span>
            </div>

            <ReviewModalButton
              className="landing-ratings__review-btn"
              onSubmitReview={(review) => {
                setReviews((current) => {
                  const nextReviews = [...current, review];
                  setActiveIndex(nextReviews.length - 1);
                  return nextReviews;
                });
              }}
            >
              Write a Review
            </ReviewModalButton>
          </div>
        </div>
      </div>

      <div className="landing-ratings__carousel">
        <button
          className="landing-ratings__arrow landing-ratings__arrow--left"
          type="button"
          onClick={handlePrev}
          aria-label="Previous reviews"
        >
          <FaChevronLeft />
        </button>

        <div className="landing-ratings__grid">
          {visibleReviews.map((review) => (
            <article className="landing-review-card" key={review.name}>
              <div className="landing-review-card__top">
                <div className="landing-review-card__stars" aria-label="5 star review">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <span className="landing-review-card__google">G</span>
              </div>

              <p>{review.text}</p>

              <div className="landing-review-card__client">
                {review.image ? (
                  <img src={review.image} alt={review.name} />
                ) : (
                  <span aria-hidden="true">{getInitials(review.name)}</span>
                )}
                <div>
                  <h3>{review.name}</h3>
                  <small>{review.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className="landing-ratings__arrow landing-ratings__arrow--right"
          type="button"
          onClick={handleNext}
          aria-label="Next reviews"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
