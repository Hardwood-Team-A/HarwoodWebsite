import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';




function Artist_Carousel({ slide_images}) {

 

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        height: '400px'
    }


    return (
      <div >
        <Slide arrows={true} infinite={true} slidesToShow={2.32} canSwipe={true} indicators={true}>
         {slide_images.map((slide_images, index)=> (
            <div key={index}>
            
              <div className="flex justify-center border-1 border-solid border-white"  style={{ ...divStyle,'backgroundImage': `url(${slide_images.url})` }}>
                
              </div>
              <span className="mt-[10%]">{slide_images.caption}</span>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Artist_Carousel
