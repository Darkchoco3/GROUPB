import React from 'react'
import img1 from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import img2 from '../assets/images/desktop/image-gallery-orange.jpg'
import img3 from '../assets/images/desktop/image-gallery-cone.jpg'
import img4 from '../assets/images/desktop/image-gallery-sugarcubes.jpg'
import '../Styles/FooterImg.css'

const FooterImg = () => {
  return (
    <>
    <div className="images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />

    </div>

    </>
  )
}

export default FooterImg