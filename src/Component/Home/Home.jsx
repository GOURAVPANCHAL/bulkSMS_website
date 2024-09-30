import React from "react";
import Hero from "../Hero/Hero";
import Counter from "../Counter/counter";
import WhyChoose from "../WhyChoose/WhyChoose";
import OurWork from "../OurWork/OurWork";
import Testimonial from "../Testimonial/testimonial";
import OurLocation from "../OurLocation/OurLocation";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
  <Helmet>
        <title>Home - Promotion Ki Duniya</title>
        <meta name="description" content="Welcome to Promotion Ki Duniya. Explore our bulk SMS services, find out why to choose us, and see our recent work." />
        <meta name="keywords" content="Bulk SMS, Promotion Ki Duniya, SMS Services, Digital Marketing, Testimonials, Our Work" />
      </Helmet>
      <Hero />
      <Counter />
      <WhyChoose />
      <OurWork />
      <Testimonial />
      <OurLocation />
    </>
  );
};

export default Home;
