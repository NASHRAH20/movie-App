import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';




function Shopping({title, image, overview}) {
    const sliceTitle = title.length > 23 ? title.slice(0,23)+'...':title;
    const sliceDiscription = overview.length > 29 ? overview.slice(0,29)+'...':overview;
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <Container className='container'>
      <Row>
        <Col className='col-lg-4' lg={4}>
    <Card className='painting shadow' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{sliceTitle}</Card.Title>
        <Card.Text>
          {sliceDiscription}
        </Card.Text>
        <Button variant="primary"  onClick={handleShow}>Go somewhere</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img className='card-img' src={image}/>

            {overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
  );
}

export default Shopping;