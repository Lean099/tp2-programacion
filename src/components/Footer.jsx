import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid bg-dark' style={{background: "#393E46", color: "white"}}>
        <div className='row'>
            <div className='col'>
                <span class="badge fs-6 my-3 text-bg-light">Contacto</span>
                <ul>
                    <li>Instagram: @Antonys</li>
                    <li>Youtube: youtube.com/antonys</li>
                    <li>Tiktok: tiktok/antonys</li>
                </ul>
            </div>
            <div className='col'>
                
            </div>
        </div>
        <div className='text-center'>
            Antonys - Todos los derechos reservados
        </div>
    </div>
  )
}

export default Footer