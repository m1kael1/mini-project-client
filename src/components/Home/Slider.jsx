import React from 'react'
import '../../styles/Slider.css'
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
  return (
    <div className='main-slider'>
      <div className='slider'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="Image-Slide"
              src='https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1273&q=80'
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='main-text'>
                <h3>CONNECT EVERYTHING WITH OUR DEVICE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor bibendum diam id volutpat.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="Image-Slide"
              src='https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className='main-text'>
                <h3>CONNECT EVERYTHING WITH OUR DEVICE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor bibendum diam id volutpat.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="Image-Slide"
              src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt="Third slide"
            />
            <Carousel.Caption>
              <div className='main-text'>
                <h3>CONNECT EVERYTHING WITH OUR DEVICE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor bibendum diam id volutpat.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

  )
}

export default Slider