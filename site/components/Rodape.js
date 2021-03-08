import { Container, Jumbotron } from 'reactstrap';

const Rodape = () => {
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                        background-color:#0a1970;
                        color:#fff;
                        padding-top:10px;
                        padding-bottom:10px;
                        margin-bottom:0rem !important;
                    }`}
            </style>
            <Container className="text-center">
               
                <footer>&copy;Rotape</footer>
            </Container>
        
        </Jumbotron>
    )
};

export default Rodape;