import React from 'react'
import { SERVICES } from '../../Data/data'
import Card from '../Card/Card'

export default function CardList() {
  return (
    <div>
      {SERVICES.map((item) => (
        <Card img={item.img} header={item.category} text={item.info}  />
      ))}
    </div>
  )
}
