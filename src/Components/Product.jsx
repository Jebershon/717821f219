import React, { useState } from 'react';
import { Card, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { data } from './hardcode';
import ".//Product.css";
const ProductCards = () => {
  const [products, setProducts] = useState(data);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div style={{ backgroundColor: "black", color: "gray" }} className='p-3'>
        <center><h1>E-Commerce - Gadgets</h1></center>
      </div>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className='mt-3 mb-3'>
                <Card.Body>
                  <center><Card.Title>{product.productName}</Card.Title></center>
                  <Card.Text className='p-3' style={{ color: "white", backgroundColor: "black",borderRadius:"20px"}}>Availability: {product.availability}</Card.Text>
                  <Button variant="btn btn-dark" onClick={() => openModal(product)}>View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={selectedProduct !== null} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <p>Price: {selectedProduct.price}</p>
              <p>Rating: {selectedProduct.rating}</p>
              <p>Discount: {selectedProduct.discount}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductCards;
