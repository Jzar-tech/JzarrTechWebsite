import React, { useEffect, useMemo, useState } from "react";
import "./Testimonials.css";
import { FaQuoteRight, FaStar, FaTimes } from "react-icons/fa";

const defaultTestimonials = [
  {
    text: "I've worked with agencies all over the world, and Jzarr Tech operates on another level. Their UI/UX capabilities are simply Awwwards-worthy.",
    name: "David Smith",
    role: "Director, CloudScale",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Jzarr Tech didn't just build our app; they completely reimagined our digital strategy. The attention to detail and design quality is unmatched. Truly a world-class team.",
    name: "Sarah Jenkins",
    role: "CEO, Finova",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Working with them felt like having an elite internal product team. They delivered our MVP in record time without compromising a single pixel of quality.",
    name: "Michael Chen",
    role: "Founder, SaaSly",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    text: "The AI integration they built for our customer support reduced ticket times by 80%. The ROI we saw in the first quarter alone paid for the entire project.",
    name: "Elena Rodriguez",
    role: "VP Marketing, TechCorp",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const emptyForm = {
  name: "",
  role: "",
  text: "",
};

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState(defaultTestimonials);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const sliderItems = useMemo(() => [...reviews, ...reviews], [reviews]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedReview = {
      name: formData.name.trim(),
      role: formData.role.trim(),
      text: formData.text.trim(),
    };

    if (!trimmedReview.name || !trimmedReview.role || !trimmedReview.text) {
      return;
    }

    setReviews((current) => [
      ...current,
      {
        ...trimmedReview,
        image: "",
      },
    ]);
    setFormData(emptyForm);
    setIsModalOpen(false);
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  return (
    <section className="testimonials">
      <div className="heading-stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <h2>Don't just take our word for it.</h2>

      <p className="subtitle">
        Hear from the visionaries and market leaders we've partnered with.
      </p>

      <button
        type="button"
        className="review-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Write a Review <span aria-hidden="true">★</span>
      </button>

      <div className="testimonial-slider">
        <div className="slider-track">
          {sliderItems.map((item, index) => (
            <div className="testimonial-card" key={`${item.name}-${index}`}>
              <div className="card-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <FaQuoteRight className="quote-icon" />

              <p className="review">"{item.text}"</p>

              <div className="client">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <div className="client-avatar" aria-hidden="true">
                    {getInitials(item.name)}
                  </div>
                )}

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="review-modal-overlay"
          onClick={() => setIsModalOpen(false)}
          role="presentation"
        >
          <div
            className="review-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-modal-title"
          >
            <button
              type="button"
              className="review-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close review form"
            >
              <FaTimes />
            </button>

            <h3 id="review-modal-title">Write Your Review</h3>
            <p className="review-modal-subtitle">
              Share your experience and it will appear in the testimonials
              slider.
            </p>

            <form className="review-form" onSubmit={handleSubmit}>
              <label>
                Customer Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Designation
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Founder, Marketing Manager"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  placeholder="Write your review here"
                  rows="5"
                  required
                />
              </label>

              <button type="submit" className="review-submit-btn">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
