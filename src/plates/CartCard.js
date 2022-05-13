import { Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './CartCard.css'

const CartCard = () => {

    const [orderQuantity, setOrderQuantity] = useState(Number(''));
    const handleIncrease = () => {
        setOrderQuantity(orderQuantity + 1);
    }
    const handleDecrease = () => {
        if (orderQuantity > 1) {
            setOrderQuantity(orderQuantity - 1);
        }
    }

    return (
        <>
            <Box className="border" >
                <Row className='px-3 py-2 sm-none' style={{ margin: "0px", background: "#f2f2f2"}}>
                    <Col xs={6} lg={6}>
                        <div style={{ fontWeight: 500, fontFamily: '"Montserrat", sans-serif' }}>Your Order Details</div>
                    </Col>
                    <Col>
                        <div style={{ fontWeight: 500, fontFamily: '"Montserrat", sans-serif' }}>Quantity</div>
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        <div style={{ fontWeight: 500, fontFamily: '"Montserrat", sans-serif', textAlign: 'right' }}>Total</div>
                    </Col>
                </Row>
                <Row className='px-3 py-2'>
                    <Col xs={12} lg={6}>
                        <Box className="d-flex">
                            <img
                                src='https://via.placeholder.com/100x100'
                                className="img-fluid me-2"
                            />
                            <Box>
                                <div style={{ fontSize: 13, fontWeight: 600, fontFamily: '"Montserrat", sans-serif' }}>Your Order Details</div>
                                <div>
                                    <span style={{ fontSize: 12, fontWeight: 500, fontFamily: '"Montserrat", sans-serif' }} className='me-2'>Code :</span>
                                    <span style={{ fontSize: 12, fontWeight: 600, fontFamily: '"Montserrat", sans-serif' }} >16485423 </span>
                                </div>
                                <div>
                                    <span style={{ fontSize: 12, fontWeight: 500, fontFamily: '"Montserrat", sans-serif' }} className='me-2'>Size :</span>
                                    <span style={{ fontSize: 12, fontWeight: 600, fontFamily: '"Montserrat", sans-serif' }} >M</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: 12, fontWeight: 500, fontFamily: '"Montserrat", sans-serif' }} className='me-2'>1 x</span>
                                    <span style={{ fontSize: 12, fontWeight: 600, fontFamily: '"Montserrat", sans-serif' }} >£45.00</span>
                                </div>
                                <div style={{ fontSize: 13, fontWeight: 500, fontFamily: '"Montserrat", sans-serif', color: '#43d5b0' }}>
                                    In Stock
                                </div>
                            </Box>
                        </Box>
                    </Col>
                    <Col className="sm-none" >
                        <Box className="d-flex align-items-center">
                            <Typography>
                                <Button variant='text' style={{ minWidth: '0px', }}>
                                    <RemoveCircleOutlineIcon onClick={() => handleDecrease()} />
                                </Button>

                                <input type="number"
                                    value={orderQuantity}
                                    className='border rounded px-2'
                                    style={{ background: "#f2f2f2", width: 50 }}
                                />
                                <Button variant='text' style={{ minWidth: 0, }}>
                                    <AddCircleOutlineIcon onClick={() => handleIncrease()} />
                                </Button>
                            </Typography>
                        </Box>
                    </Col>
                    <Col className="sm-none">
                        <div style={{ fontSize: 12, fontWeight: 600, fontFamily: '"Montserrat", sans-serif', textAlign: 'center' }}>£45.00</div>


                    </Col>
                    <Col className="sm-none">
                        <div style={{ fontSize: 12, fontWeight: 600, fontFamily: '"Montserrat", sans-serif', textAlign: 'right' }}>£45.00</div>
                    </Col>
                </Row>
            </Box>
            <br />
            <Row>
                <Col xs={12} lg={6}>
                </Col>
                <Col xs={12} lg={6} >
                    <Box className="d-flex justify-content-between p-2">
                        <div style={{ fontSize: 18, fontWeight: 600, fontFamily: '"Montserrat", sans-serif', textAlign: 'left' }}>Total : </div>
                        <div style={{ fontSize: 18, fontWeight: 600, fontFamily: '"Montserrat", sans-serif', textAlign: 'right' }}>£45.00</div>
                    </Box>
                </Col>
            </Row>
            <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='contained'>Checkout</Button>
            </Box>
        </>
    )
}

export default CartCard