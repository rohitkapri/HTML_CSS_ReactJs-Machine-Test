import React from 'react'
import './ReusableHeader.css'

const ReusableHeader = ({Title}) => {
  return (
    <>
      <div className='header-container'>
        <div className='container-content'>
        <h2>{Title}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, tenetur! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  )
}

export default ReusableHeader
