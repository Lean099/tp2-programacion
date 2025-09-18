import React from 'react'

const Main = () => {
  return (
    <div className='m-4'>
        <div>

        </div>
        <div className='container-fluid'>
            <div className='row gap-3'>
                <div class="card col" style={{width: "18rem"}}>
                <img src="https://previews.123rf.com/images/navintar/navintar1610/navintar161000183/67432592-tasty-hamburger-french-fries-and-chili-sauce-on-white-plate-fast-food-with-copy-space.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Hamburguesas</h5>
                    <p class="card-text">Hamburguesa america con agregado de papas  con cheddar</p>
                    <a href="#" class="btn btn-sm btn-dark">Hacer pedido</a>
                </div>
                </div>

                <div class="card col" style={{width: "18rem"}}>
                    <img src="https://www.circuitogastronomico.com/wp-content/uploads/2025/05/mariachi-lomitos.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Lomito & Milanesa</h5>
                        <p class="card-text">Lomito especial o sanguche de milanesa especial con papas</p>
                        <a href="#" class="btn btn-sm btn-dark">Hacer pedido</a>
                    </div>
                </div>

                <div class="card col" style={{width: "18rem"}}>
                    <img src="https://www.paulinacocina.net/wp-content/uploads/2023/03/pizza-casera.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Pizza</h5>
                        <p class="card-text">Pizza napolitana, muzzarella, americana.</p>
                        <a href="#" class="btn btn-sm btn-dark">Hacer pedido</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Main