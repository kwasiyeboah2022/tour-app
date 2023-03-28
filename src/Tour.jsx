import React from 'react'

const Tour = ({ id, image, info, name, price }) => {
  return (
    <article className="single-tour ">
      <img src={image} alt={name} className="img" />

      <div className="tour-info">
        <h4>{name}</h4>
        <span className="tour-price">${price}</span>
      </div>
      <p>{info}</p>
    </article>
  )
}

export default Tour
