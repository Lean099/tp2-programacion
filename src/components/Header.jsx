import React from 'react'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg" style={{background:"#E8DFCA"}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><span class="badge p-2 fs-5 text-bg-dark">Antony's</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Comidas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                </div>
                <div>
                    <button className='btn me-2 btn-sm btn-dark'>Iniciar Sesion</button>
                    <button className='btn btn-sm btn-dark'>Registrarse</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header