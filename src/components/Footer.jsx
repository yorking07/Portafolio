import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <span className='footer_span'>Certificados</span>
        <ul className='footer_ul'>
            <li className='footer_li'><a className='footer_ancore' href="https://certiwise.co/verify/95" target='blank'>Fundamentos Basicos</a></li>
            <li className='footer_li'><a className='footer_ancore' href="https://certiwise.co/verify/346" target='blank'>FrontEnd con React</a></li>
            <li className='footer_li'><a className='footer_ancore' href="" target='blank'>BackEnd con node</a></li>
            <li className='footer_li'><a className='footer_ancore' href="" >Certificado Full Stack</a></li>
        </ul>
    </div>
  )
}

export default Footer