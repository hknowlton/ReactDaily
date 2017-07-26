import React from 'react'
import Slider from 'react-slick'

export default class SwipeToSlide extends React.Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
      }
    };
    return (
      <div>
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div><h3>1st Component</h3></div>
          <div><h3>2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis illo repellat aperiam, quaerat molestias sapiente. Asperiores earum dolorum tempore quae numquam odit, aperiam nisi, soluta, expedita autem quidem atque illo.</h3></div>
          <div><h3>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nisi doloribus beatae aspernatur, ullam deserunt dolorem praesentium. Autem id magnam dicta vero, cum ex dolorem, at in iusto ipsum, repudiandae!</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
        </Slider>
      </div>
    )
  }
}