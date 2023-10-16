//aqui tu chama os outros componentes

import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'
import Header from '../../components/Header/Header.jsx'
import Body from '../../components/Body/Body.jsx'
import { Container } from '../../styles/GlobalStyles.js'


const LandingPage = () => {
  return (
    <div>
      <Container/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default LandingPage