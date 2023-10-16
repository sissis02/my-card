import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'

const Card = styled.div`
  width: 30vw; 
  height: 50vh;  
  display: flex; 
  flex-direction: column;  
`

const Title = styled.h1`
  color: #4D49C8; 
  font-family: poppins;  
`
const Img = styled.img`
  width: 100%; 
  height: auto; 
`

const Ul = styled.ul`
  list-style-type: none;  
  display: flex; 
  justify-content: space-around; 
`
const Para = styled.p` 
  color: #4977C8; 
`
const Li = styled.li`
  color: #49A3C8; 
`

function App() {
  return (
    <Card>
      <Img src="https://img.freepik.com/photos-gratuite/maquette-ordinateur-portable-plat-bloc-notes_23-2148111366.jpg?w=900&t=st=1697444558~exp=1697445158~hmac=798132da55ee7ff98ad199655e2b928c0fb9a053bd9f2e189acf0802c5485bb6" alt="desk" />
      <Title>My first card</Title>
      <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis atque corporis repellendus laudantium amet assumenda aperiam commodi odio cupiditate, earum quia minus, distinctio cum dignissimos adipisci. Quam provident vero qui?</Para>
      <nav>
        <Ul>
          <Li>Home</Li>
          <Li>About Us</Li>
          <Li>Contact</Li>
        </Ul>
      </nav>
    </Card>
  )
}

export default App
