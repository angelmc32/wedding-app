import React from 'react'
import photo1 from '../images/photography-23.jpg'
import photo2 from '../images/photography-77.jpg'
import photo3 from '../images/photography-41.jpg'
import photo4 from '../images/photography-188.jpg'
import photo5 from '../images/photography-254.jpg'
import photo6 from '../images/photography-121.jpg'
import photo7 from '../images/photography-131.jpg'
import photo8 from '../images/photography-227.jpg'
import photo9 from '../images/photography-263.jpg'

const Slideshow = () => {

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light uk-height-1-1" tabIndex={-1} uk-slideshow="true;autoplay: true; autoplay-interval: 3000">
        <ul className="uk-slideshow-items uk-height-1-1">
          { photos.map( (photo, index) => 
            <li key={index}>
              <img src={photo} alt="" uk-cover="true" />
            </li> ) }
          
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous" />
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next" />
      </div>
  )
}

export default Slideshow