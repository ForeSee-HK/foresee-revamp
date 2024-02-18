import React, { useRef } from 'react'
import useInView from './components/hooks/useInView'

import NavProgress from './components/NavProgress'
import Community from './components/Community'
import OurStory from './components/OurStory'
import WorkedWith from './components/WorkedWith'
import ContactUs from './components/ContactUs'
import HomePageRef from './components/HomePage'
import AppsPageRef from './components/AppsPage'

const Layout = () => {

  // Community Refs
  const homePageRef = useRef(null)
  const appsPageRef = useRef(null)
  const communityRef = useRef(null)
  const ourStoryRef = useRef(null)
  const workedWithRef = useRef(null)
  const contactUsRef = useRef(null)

  const observedElements = useInView([homePageRef, appsPageRef, communityRef, workedWithRef, contactUsRef])

  // const observedElements = useInView([])

  return (
    <div >
   
      <NavProgress progress={Object.keys(observedElements).reduce((latest, key) => {
        if (observedElements[key].isInView) {
          return (key > latest) ? key : latest
        } else {
          return latest
        }
      }, -1)} />

      {/* Page Content Below */}

      {/* Examples below, uncomment to view the demo */}
      <HomePageRef ref={homePageRef} id="0" />
      <AppsPageRef ref={appsPageRef} id="1" />
      <Community ref={communityRef} id="2" />
      <OurStory ref={ourStoryRef} id="3" />
      <WorkedWith ref={workedWithRef} id="4" />
      <ContactUs ref={contactUsRef} id="5" />
    </div>
  )
}

export default Layout