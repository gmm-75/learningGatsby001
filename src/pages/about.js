// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
 
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
      <p>Now we have a component for this section</p>
    </Layout>
  )
}

// For pages we can export Head metadata by using the following method:
export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )

// Step 3: Export your component
export default AboutPage