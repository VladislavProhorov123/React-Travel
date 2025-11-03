import React from 'react'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import CardList from './Components/CardList/CardList'
import CardCity from './Components/CardCity/CardCity'
import CityList from './Components/CityList/CityList'
import Book from './Components/BookStep/Book'

export default function App() {
  return (
    <div className=''>
      <Hero />
      <Title subtitle='CATEGORY' title='We Offer Best Services' /> 
      <CardList />
      <Title subtitle='Top Selling' title='Top Destinations' />
      <CityList />
      <Book />
    </div>
  )
}
