import React from 'react'
import Layout from './layout'
import Navbar from './components/Navbar'
import Hero from '../../app/(home)/components/Hero'
import ComponentsShowcase from './components/ComponentsShowcase'
import ButtonShowcase from './components/ButtonShowcase'
import Testimonials from './components/Testimonial'


const  Home = () => {
  return (
   <Layout>
    <Navbar/>
    <Hero/>
    <ComponentsShowcase/>
    <Testimonials/>
    <ButtonShowcase/>
   </Layout>
  )
}

export default  Home