import React, { useState, useEffect, useCallback } from 'react';
import { Client } from './Client';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';


SwiperCore.use([Navigation])

export default function KitchenCarousel() {
  const [loadCarousel, setLoadCarousel] = useState(false);
  const [carouselSlide, setCarouselSlide] = useState([]);

  const cleanupCarouselSlide = useCallback((rawData) => {
    const cleanSlide = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.slide;
      const slideDescription = fields.description;
      const slideBackground = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slideDescription, slideBackground };
      return updatedSlide;
    });
    setCarouselSlide(cleanSlide);
  }, []);

  const addCarouselSlide = useCallback(async () => {
    setLoadCarousel(true);
    try {
      const response = await Client.getEntries({ content_type: 'recipeCarousel' });
      const responseData = response.items;
      if (responseData) {
        cleanupCarouselSlide(responseData);
      } else {
        setCarouselSlide([]);
      }
      setLoadCarousel(false);
    } catch (error) {
      console.log(error);
      setLoadCarousel(false);
    }
  }, [cleanupCarouselSlide]);

  useEffect(() => {
    addCarouselSlide();
  }, []);

  console.log(carouselSlide);

  return (
    <div className='kitchen-carousel'>
        <Swiper>
          {carouselSlide.map((item) => {
          const {id, slideTitle, slideDescription, slideBackground} = item
          return (
            <SwiperSlide key={id}>
                <div className='slide-wrap'  style={{backgroundImage: `url(${slideBackground})`}}>
                  <div className='text-wrap'>
                      <h2>{slideTitle}</h2>
                      <p>{slideDescription}</p>
                  </div>
                </div>
            </SwiperSlide>
            
            );
          })}
        </Swiper>
      
    </div>
  );
}
