/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Instrument from './Instrument';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = ({ instruments }) => {
  const instrumentList = instruments;
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#97BF0F' }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#97BF0F' }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="homepage">
      <h1 className="text-center">🎵🎶🎼 INSTRUMENTS 🎵🎶🎼</h1>
      <h3 className="text-center mb-5">Please select an instrument</h3>
      <Slider {...settings}>
        {instrumentList.map((instrument) => (
          <Instrument key={instrument.id} instrument={instrument} />
        ))}
      </Slider>
    </div>
  );
};

Home.propTypes = {
  instruments: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool])),
  ).isRequired,
};

export default Home;
