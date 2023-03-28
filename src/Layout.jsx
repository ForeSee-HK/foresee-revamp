import React, { useRef } from 'react'
import useInView from './components/hooks/useInView'

import Example from './components/Example'

const Layout = () => {

    // Example Refs
    // const exampleRef0 = useRef(null)
    // const exampleRef1 = useRef(null)
    // const exampleRef2 = useRef(null)
    // const exampleRef3 = useRef(null)
    // const exampleRef4 = useRef(null)
    // const observedElements = useInView([exampleRef0, exampleRef1, exampleRef2, exampleRef3, exampleRef4])
    
    const observedElements = useInView([])

    return (
      <div>
        <h1 style={{ position: 'sticky', top: 0, background: '#fff', margin: 0, widith: "100%" }}>
            Elements currently in view:
            {Object.keys(observedElements).map((key) => {
              return <span key={key}>{observedElements[key].isInView ? key : ''}</span>;
            })}
        </h1>

        {/* Page Content Below */}
        
        {/* Examples below, uncomment to view the demo */}
        {/* <Example ref={exampleRef0} id="0" />
        <Example ref={exampleRef1} id="1" />
        <Example ref={exampleRef2} id="2" />
        <Example ref={exampleRef3} id="3" />
        <Example ref={exampleRef4} id="4" /> */}
      </div>
    )
  }
  
  export default Layout