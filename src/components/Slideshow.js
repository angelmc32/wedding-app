import React from 'react'
import photo1 from '../images/photography-23.jpg'
import photo2 from '../images/photography-77.jpg'
import photo3 from '../images/photography-254.jpg'

const Slideshow = () => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light uk-height-1-1" tabIndex={-1} uk-slideshow="true;autoplay: true; autoplay-interval: 3000">
        <ul className="uk-slideshow-items uk-height-1-1">
          <li>
            <img src={photo1} alt="" uk-cover="true" />
          </li>
          <li>
            <img src={photo2} alt="" uk-cover="true" />
          </li>
          <li>
            <img src={photo3} alt="" uk-cover="true" />
          </li>
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous" />
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next" />
      </div>
  )
}

export default Slideshow