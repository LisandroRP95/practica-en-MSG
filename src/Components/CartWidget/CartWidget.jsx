import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button';

function CartWidget() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Button variant="secondary">
                        <Figure>
                        <Figure.Image
                            width={50}
                            height={50}
                            alt="Cart"
                            src="./src/assets/cart-xs.svg" /></Figure>0</Button>{''}
                </Col>
            </Row>
        </Container>
    )
}

export default CartWidget