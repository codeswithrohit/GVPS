import AboutSection from '@/src/dashboardComponent/AboutSection'
import AdmissionBanner from '@/src/dashboardComponent/AdmissionBanner'
import BottomInfoSection from '@/src/dashboardComponent/BottomInfoSection'
import CourseSearch from '@/src/dashboardComponent/CourseSearch'
import EventsSection from '@/src/dashboardComponent/EventsSection'
import FeaturesBar from '@/src/dashboardComponent/FeaturesBar'
import Footer from '@/src/dashboardComponent/Footer'
import HeroSection from '@/src/dashboardComponent/HeroSection'
import Navbar from '@/src/dashboardComponent/Navbar'
import VideoNewsSection from '@/src/dashboardComponent/VideoNewsSection'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturesBar/>
      {/* <AboutSection/> */}
      <VideoNewsSection/>
      <AdmissionBanner/>
      <EventsSection/>
      <CourseSearch/>
      <BottomInfoSection/>
      <Footer/>
    </div>
  )
}

export default index