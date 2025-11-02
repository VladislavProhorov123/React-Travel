import React from 'react'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import CardList from './Components/CardList/CardList'

export default function App() {
  return (
    <div className=''>
      <Hero />
      <Title subtitle='CATEGORY' title='We Offer Best Services' /> 
      <CardList />
    </div>
  )
}
