import React, { useRef } from 'react'
import useInView from './components/hooks/useInView'

import NavProgress from './components/NavProgress'
import Example from './components/Example'
import WorkedWith from './components/WorkedWith'
import ContactUs from './components/ContactUs'
import HomePageRef from './components/HomePage'
import AppsPageRef from './components/AppsPage'

const Layout = () => {

  // Example Refs
  const homePageRef = useRef(null)
  const appsPageRef = useRef(null)
  const exampleRef2 = useRef(null)
  const exampleRef3 = useRef(null)
  const workedWithRef = useRef(null)
  const contactUsRef = useRef(null)

  const observedElements = useInView([homePageRef, appsPageRef, exampleRef2, exampleRef3, workedWithRef, contactUsRef])

  // const observedElements = useInView([])

  return (
    <div>
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
      <Example ref={exampleRef2} id="2" />
      <Example ref={exampleRef3} id="3" />
      <WorkedWith ref={workedWithRef} id="4" />
      <ContactUs ref={contactUsRef} id="5" />
    </div>
  )
}

export default Layout