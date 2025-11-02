import React from 'react'
import { SERVICES } from '../../Data/data'
import Card from '../Card/Card'
import './CardList.css'

export default function CardList() {
  return (
    <div className='card-list'>
      {SERVICES.map((item) => (
        <Card img={item.img} header={item.category} text={item.info} key={item.id}  />
      ))}
    </div>
  )
}
