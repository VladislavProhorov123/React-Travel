import React from 'react'
import { TOP_SELLING } from '../../Data/data'
import CardCity from '../CardCity/CardCity'
import './CityList.css'
import decore2 from '/src/assets/Decore2.svg'

export default function CityList() {
  return (
    <div className='city-list'>
        {TOP_SELLING.map((item) => (
            <CardCity key={item.id} img={item.img} name={item.name} price={item.price} trip={item.trip} />
        ))}
        <img src={decore2} alt="" className='decore-city' />
    </div>
  )
}
