import React from 'react';
import '../Styles/testimonial.css';
import imageEmily from '../assets/images/image-emily.jpg';
import imageThomas from '../assets/images/image-thomas.jpg';
import imageJennie from '../assets/images/image-jennie.jpg';

const Testimonial = () => {
  return (
    <div>
      <section className="main2">
        <h3>Client testimonials</h3>
        <div className="general">
          <div>
            <img className="pic" src={imageEmily} alt="Emily R." />
            <p className="text">
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </p>
            <p className="ntext">Emily R.</p>
            <p className="btext">Marketing Director</p>
          </div>

          <div>
            <img className="pic" src={imageThomas} alt="Thomas S." />
            <p className="text">
              Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p className="ntext">Thomas S.</p>
            <p className="btext">Chief Operating Officer</p>
          </div>

          <div>
            <img className="pic" src={imageJennie} alt="Jennie F." />
            <p className="text">
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </p>
            <p className="ntext">Jennie F.</p>
            <p className="btext">Business Owner</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
