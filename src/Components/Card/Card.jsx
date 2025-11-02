import React from 'react'

export default function Card({img, header, text}) {
  return (
    <div>
        <img src={img} alt="" />
        <h3>{header}</h3>
        <p>{text}</p>
    </div>
  )
}
