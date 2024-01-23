import React from 'react'
import Layout from './components/Layout'
import CrausalCard from './components/Crausal/CrausalCard'
import Section1 from './components/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  return (
    <div>
      <Layout>
        <CrausalCard/>
        <Section1/>
        <Section2/>
      </Layout>
    </div>
  )
}

export default App

