import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);



function Painel() {
   return (
      <div>

         <div>


            <Jumbotron fluid className="descr-top">
               <style>
                  {`.descr-top{
                background-color:#0a1970;
                color:#fff;
                margin-bottom:0rem !important;
                
                
             }`

                  }

               </style>
               <Container className="text-center">
                  <h1 className="display-4">Sua vitrine de compras virtual!!</h1>
                  <p className="lead"></p>
                  <hr className="my-2" />
                  <a href='/orcamento' className="btn btn-outline text-white btn-lg">Orçamento</a>

               </Container>
            </Jumbotron>
            <Jumbotron fluid className="Ofertas">
               <style>
                  {`.Ofertas {
                     background-color:#fff;
                     margin-bottom:0rem !important;
                
                  }.circulo{
                     width:140px;
                     height:140px;
                     background-color:#0a1970;
                     font-size:90px;
                     color:#fff

                  }.centralizar {

                     margin: 0 auto !important;
                     float: none !important;
                  }
                }`}


               </style>
               <Container className="text-center">
                  <div>
                     <h2 className="display-4"> Nossos Orçamentos</h2>
                     <p className="lead pb-4">Morbi id viverra risus. Integer facilisis, felis et maximus cursus, nunc lorem euismod leo, vel
                aliquam libero nunc sed velit</p>
                  </div>
                  <div className="row">
                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                           <FontAwesomeIcon icon="laptop-code" />
                           


                        </div>
                        <h2 className="mt-4-mb"> Serviço 1</h2>
                        <p> Mauris semper est nisi, vel porta mauris eleifend sit amet.
                            Integer eu erat risus.Praesent lobortis erat ac aliquam bibendum.  </p>
                     </div>

                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                           <FontAwesomeIcon icon="desktop" />


                        </div>
                        <h2 className="mt-4-mb"> Serviço 2</h2>
                        <p> Mauris semper est nisi, vel porta mauris eleifend sit amet.
                            Integer eu erat risus.Praesent lobortis erat ac aliquam bibendum.  </p>
                     </div>
                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                           <FontAwesomeIcon icon="network-wired" />

                        </div>
                        <h2 className="mt-4-mb"> Serviço 3</h2>
                        <p> Mauris semper est nisi, vel porta mauris eleifend sit amet.
                            Integer eu erat risus.Praesent lobortis erat ac aliquam bibendum.  </p>
                     </div>
                  </div>
               </Container>
            </Jumbotron>
         </div>
      </div>


   )
}

export default Painel;