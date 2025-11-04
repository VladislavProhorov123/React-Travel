import React from 'react'
import './FooterColum.css'

export default function FooterColum({title, links}) {
  return (
    <div className='footer-colum'>
        <h3>{title}</h3>
        <ul>
            {links.map((link, index) => (
                <li className='column-link' key={index}>
                    <a href="#">{link}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}
