import React from 'react'
import './Title.css'

export default function Title({ subtitle, title}) {
  return (
    <div className='container title-box'>
        <h3 className='subtitle'>{subtitle}</h3>
        <h2 className='title'>{title}</h2>
    </div>
  )
}
