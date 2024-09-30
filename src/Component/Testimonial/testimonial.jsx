import React from "react";
import Slider from "react-slick";
import "./testimonial.css";

const Testimonial = () => {
  const reviews = [
    {
      name: "Rahul Mehra",
      rating: '⭐⭐⭐⭐⭐',
      review:
        "Promotion Ki Duniya has transformed our communication strategy. Their bulk SMS services are reliable and easy to use, helping us reach our audience effectively.",
    },
    {
      name: "Anita Verma",
      rating: '⭐⭐⭐⭐',
      review:
        "We’ve been using their services for a year now, and the results have been fantastic. Their platform is intuitive, and their support team is very responsive.",
    },
    {
      name: "Sunil Sharma",
      rating: '⭐⭐⭐⭐⭐',
      review:
        "The delivery rates of Promotion Ki Duniya are exceptional. Our promotional SMS campaigns have never been this successful before. Great service!",
    },
    {
      name: "Priya Singh",
      rating: '⭐⭐⭐⭐⭐',
      review:
        "As a small business, Promotion Ki Duniya’s platform has been essential in reaching our customers. Their user-friendly interface makes sending messages a breeze.",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section p-5 text-center">
      <div className="testimonial-container">
        <h4 className="testimonial-title-black">SUCCESS STORIES</h4>
        <div className="loader-line"></div>
        <h1 className="testimonial-colorful-heading">OUR CLIENT REVIEWS</h1>
        <p className="testimonial-description">
          We have the ability to assist you to boost your business in a desired
          and positive environment. Several companies from different industries
          and geographies have entrusted Promotion Ki Duniya with the task of
          managing their Digital Marketing and Brand Building activities.
        </p>

        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-review-slide p-3">
              <h3 className="testimonial-client-name">{review.name}</h3>
              <p className="colorfull_Heading">
                <b>
                Rating: {review.rating}
                </b>
              </p>
              <p className="testimonial-review">{review.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
