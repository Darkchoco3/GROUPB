import React from 'react';
import transformImage from '../assets/images/desktop/image-transform.jpg';
import standoutImage from '../assets/images/desktop/image-stand-out.jpg'
import '../Styles/Services.css'

const Services = () => {
  return (
    <div className='section-grid'>
            <section className='section-one services'>
                <h2>Transform your brand</h2>
                <p>We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <a href="" className='uppercase'>Learn more</a>
            </section>

            <section className='section-two services'>
              <img src={transformImage} alt="a white egg that has a shadow" />
            </section>

            <section className='section-three services'>
               <img src={standoutImage} alt="a pink cup" />
            </section>

            <section className='section-four services'>
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers,
                  videographers, and copywriters, we'll build and extend your brandin digital places.
                </p>
                <a href="" className='uppercase'>Learn more</a>
            </section>
    </div>
  )
}

export default Services