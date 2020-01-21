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
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

const Slideshow = () => {

  const images = useStaticQuery(graphql`
  {
    image1: file(relativePath: {eq: "photography-23.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: {eq: "photography-77.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: {eq: "photography-41.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: {eq: "photography-188.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: {eq: "photography-254.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: {eq: "photography-121.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: {eq: "photography-131.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: {eq: "photography-227.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    image9: file(relativePath: {eq: "photography-263.jpg"}) {
      childImageSharp {
        id
        fluid(maxWidth: 1200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light uk-height-1-1" tabIndex={-1} uk-slideshow="true;autoplay: true; autoplay-interval: 3000">
        <ul className="uk-slideshow-items uk-height-1-1">
          {/* { photos.map( (photo, index) => 
            <li key={index}>
              <img src={photo} alt="" uk-cover="true" />
            </li> ) } */}
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image1.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image2.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image3.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image4.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image5.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image6.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image7.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image8.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          <li>
            <BackgroundImage
            Tag="section"
            className="uk-height-1-1"
            fluid={images.image9.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            />
          </li>
          
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous" />
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next" />
      </div>
  )
}

export default Slideshow

// export const query = graphql`
// {
//   file(relativePath: {eq: "photography-23.jpg"}) {
//     childImageSharp {
//       id
//       fluid {
//         src
//       }
//     }
//   }
// }
// `