import React,{useEffect,useState} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import items from './item.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Base() {
    const [products, setproducts] = useState([]);
    const [pro, setpro] = useState([]);

    

  useEffect(() => { // Pass in a callback function!
    axios.get('https://dummyjson.com/products')
  .then(function (response) {
    // handle success
    console.log(response);
    setproducts(response.data.products)
    // let data=response.data.products;


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  }, []);
    


    return (
        <Container>
          <Row>

          {/* style={{ width: '18rem' }} */}
        {products.map((product,index)=>{
            return(
              <Col xs={12} md={6} lg={4}>
                <Card >
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {products.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
        
            );
        })}


</Row>
    </Container>);

    
}

export default Base;