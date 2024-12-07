import React from 'react'
import Services from './Services'
import Features from './Features'
import '../Styles/Features.css'

const ContentSection = () => {
  return (
    <>
    <div className='container'>
      <Services/>
      <Features/>
    </div>    
    </>
  )
}

export default ContentSection