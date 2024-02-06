import React from 'react'
import "../styles/nav.css"

const Nav = () => {
  return (
    <>
        <nav className='nav-container'>
            <span className='Logotipo-container'>
                <img className='logotipo' src="https://c8.alamy.com/compes/2edwr2t/plantilla-de-logotipo-de-la-letra-j-monnogram-delicado-diseno-floral-logotipo-personal-diseno-vectorial-2edwr2t.jpg" alt="" />
            </span>
            <span className='Logos-de-contacto'>
                <button className='github'>    <img src="" alt="" />     </button>
                <button className='linkedin'>  <img src="" alt="" />         </button>
                <button className='gmail'>     <img src="" alt="" />    </button>
                <button className='whatsapp'>  <img src="" alt="" />         </button>
            </span>
        </nav>
    </>

  )
}

export default Nav