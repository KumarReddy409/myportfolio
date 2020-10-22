import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/img/carousal/slide1.webp';
import Slide2 from '../../assets/img/carousal/slide2.webp';
import Slide3 from '../../assets/img/carousal/slide3.webp';
import './Carousel.css';
import Scrolldown from '../../components/scroll-down/scrolldown'



function carousel() {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 custom-img"
      src={Slide1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 custom-img"
      src={Slide2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img "
      src={Slide3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<Scrolldown/>
        </div>
    )
}

export default carousel
