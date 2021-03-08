
import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Rotape from '../components/Rodape';
import Painel from '../components/Jumbotron';




function Home({data}) {
   return (
      <div>
         <Head>
            <title>
               Home - Orçamento</title>
         <meta name="description" content="Site de vendas de produto de supermecados para revendedores" />

         { console.log(data)}
         </Head>

         < Menu />
         < Painel />
         <Rotape />

      </div>


   )
}

export async function getServerSideProps(){
  const response= await fetch("http://localhost:5000/home")
   const data = await response.json();
   console.log(data);

   return {props:{data}};
}



export default Home;