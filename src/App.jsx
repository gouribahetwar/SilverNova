import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GenerateButton from './Component/Button/GenerateButton'
import Navbar from './Component/NavBar/Navbar'
import About from './Component/About/About'
// import UseCase from './Component/Usecase/Usecase'
import Contract from './Component/Contract/Contract'

// import Tokenomics from './Component/Tokenomics/Tokenomics'
import Footer from './Component/Footer/Footer'
import Cards from './Component/Card/Cards'
import Token from './Component/Token/Token'
import TokenSupply from './Component/TokenSupply/TokenSupply'
import Partner from './Component/Partner/Partner'
import Roadmap from './Component/Roadmap/Roadmap'
import Marquees from './Component/Marquees/Marquees'
import Hero from './Component/Hero/Hero'
import FAQ from './Component/FAQ/FAQ'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Marquees/>
  <About/> 
  
  <Cards/>
  <Token/>  
<TokenSupply/>


<Partner/>
<FAQ/>
<Footer/>
{/* <Roadmap/>
<Contract/>

 */}
    </>
  )
}

export default App
