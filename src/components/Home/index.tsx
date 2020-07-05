import React from 'react'

import { Container } from './styles'
import homeimg from '../../assets/homeimg.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Post what you want, where you want, when you want.</h1>
        <p>Postit is a simple and lightweight site to express your ideas</p>
      </div>
      <img
        src={homeimg}
        alt="home"
        style={{
          height: '500px',
          width: '500px',
        }}
      />
    </Container>
  )
}

export default Home
