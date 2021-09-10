import React from "react";
import { Carousel } from "react-responsive-carousel";
import manual1 from '../../images/manual1.png'
import manual2 from '../../images/manual2.png'
import manual3 from '../../images/manual3.png'

 const Howtouse = () => (
  <Carousel
    autoPlay="false"
    interval="2000"
    transitionTime="350"
    emulateTouch="true"
    swipeable="true"
    useKeyboardArrows="true"
    infiniteLoop="true"
  >
    <div>
      <img alt='manual1' className='manual' src={manual1} />  
    </div>
    <div>
      <img alt='manual2' className='manual' src={manual2} />
    </div>
    <div>
      <img alt='manual3' className='manual' src={manual3} />
    </div>
  </Carousel>
);

export default Howtouse