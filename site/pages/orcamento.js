import React,{useState} from 'react'; // useState serve  para iclusão de informaçoes na base de dados
import Head from 'next/head'; // importar Tag Herd
import { Container, Jumbotron } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input,Alert} from 'reactstrap';
import Menu from '../components/Menu';
import Rotape from '../components/Rodape';


function orcamento() {

   const [solicitacaos ,setSolicitacaos] = useState({
      name:'',
      email:'',
      fone:'',
      zap:'',
      projeto:''
   });

   const [respose,setRespose] = useState({
      formSave:false,
      type:'',
      message:''
   })

   const onChangeInput = e =>setSolicitacaos({...solicitacaos,[e.target.name]:e.target.value});
  
   const sendSocitacaos = async e => {
      e.preventDefault();
      
      console.log(solicitacaos)

      setRespose({formSave:true})



      try {

    const res = await fetch("http://localhost:5000/orcamento",{
         method:'POST',
         body:JSON.stringify(solicitacaos),
         headers:{'Content-Type':'application/json'}
      });

      const responseEnv = await res.json();

      if(responseEnv.error){
         setRespose({
            type:'error',
            message:responseEnv.message
         });
      }else{
         setRespose({
            formSave:false,
            type:'success',
            message:responseEnv.message
         });
      }
      
   }catch(err){
     setRespose({
        formSave:false,
        type:'error',
        message:"Erro: Orçamento não enviado com sucesso"
     });
    
   }


   } 
   
   return (
      <div>
         <Head>
         <title>
            Orçamento
         </title>
         <meta name="description" content="Site de vendas de produto de supermecados para revendedores"/>

         
         </Head>
         <Menu />
         <Jumbotron fluid className="descr-top">
            <style>
               {
                  `.descr-top {
                background-color:#0a1970;
                color:#fff;
                padding-top:40px;
                padding-bottom:40px
                margin-bottom: 0rem !important
             }`
               }
            </style>
            <Container className="text-center">
               <h1 className="display-4"> Orçamento</h1>
            </Container>

         </Jumbotron>

         <Jumbotron fluid className="form-orcamento">
            <style>
               {`.form-orcamento{
               padding-top:80px;
               padding-bottom:80px;
               background-color:#fff;
               margin-bottom:0rem !important;
         }`}

            </style>
            <Container>
            {respose.type === 'error' ? <Alert color ="danger">{respose.message}</Alert>:""}
            {respose.type === 'success' ? <Alert color ="success">{respose.message}</Alert>:""}

               <Form onSubmit={sendSocitacaos}>
                  <FormGroup>
                     <Label for="name">Nome:</Label>
                     <Input type="text" name="name" id="name" placeholder="Digite seu nome"
                     onChange={onChangeInput} />
                  </FormGroup>

                  <FormGroup>
                     <Label for="email">Email:</Label>
                     <Input type="email" email="email" id="email" placeholder="Digite seu email"
                     onChange={onChangeInput} />
                  </FormGroup>

                  <FormGroup>
                     <Label for="fone">Telefone:</Label>
                     <Input type="text" name="fone" id="fone" placeholder="(xx)xxxx-xxxx" 
                     onChange={onChangeInput}/>
                  </FormGroup>

                  <FormGroup>
                     <Label for="zap">Telefone:</Label>
                     <Input type="text" name="zap" id="zap" placeholder="(xx) x xxxx-xxxx" 
                     onChange={onChangeInput}/>
                  </FormGroup>

                  <FormGroup>
                     <Label for="projeto">Projeto:</Label>
                     <Input type="textarea" name="projeto" id="projeto" placeholder="Fale sobre o seu projeto..." 
                     onChange={onChangeInput}/>
                  </FormGroup>
                  
                  {respose.formSave ? <Button type ="submit" outline color = "danger" disabled>Enviando...
                  </Button>:<Button type="submit" outline color ="primary">Solicitar</Button> }
                  

               </Form>
            </Container>

         </Jumbotron>






         <Rotape />
      </div>



   )
}

export default orcamento;
