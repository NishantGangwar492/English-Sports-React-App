import { Button, Checkbox, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../../components/product/Images'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeProduct from '../../plates/HomeProduct'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Product = (p) => {


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
        <Container>
            <br />
            <Row>
                <Col xs={12} lg={7}>
                    <Images />
                </Col>
                <Col xs={12} lg={5}>
                    <Box className="d-flex justify-content-between">
                        <Box >
                            <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="my-1">Product Name</h3>
                            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="my-2">Price</h2>
                        </Box>
                        <Box >
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </Box>
                    </Box>
                    <hr />
                    <br />
                    <h6 style={{ fontFamily: "'Montserrat', sans-serif" }} className="my-2">Choose size from stock</h6>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                        <label className="btn btn-outline-primary  me-3" for="btnradio1">S</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label className="btn btn-outline-primary  me-3" for="btnradio2">M</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label className="btn btn-outline-primary  me-3" for="btnradio3">L</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label className="btn btn-outline-primary  me-3" for="btnradio3">XL</label>
                    </div>
                    <br />
                    <br />
                    <Box>
                        <br />
                        <h6 style={{ fontFamily: "'Montserrat', sans-serif" }} className="my-2">Quantity</h6>

                        <Box>

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
                            <br />

                            <Button variant="contained" className='w-50'>Buy Now</Button>
                            <Button className='w-50'>Add to cart</Button>
                        </Box>

                    </Box>
                </Col>
            </Row>
            <br />
            <BasicTabs />
            <br />
            <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>Recently Viewed</h2>
            <Box className='my-3 row-category'
                style={{ display: 'flex', overflowX: 'scroll' }}
            >
                <HomeProduct
                    title={"£45"}
                    description={"The North Face Performance Tek Shorts"}

                />
                <HomeProduct
                    title={"£45"}
                    description={"The North Face Performance Tek Shorts"}

                />
                <HomeProduct
                    title={"£45"}
                    description={"The North Face Performance Tek Shorts"}

                />
                <HomeProduct
                    title={"£45"}
                    description={"The North Face Performance Tek Shorts"}

                />
                <br />
            </Box>
            <br />
        </Container>
    )
}

export default Product




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Product Info" {...a11yProps(0)} />
                    <Tab label="Delivery" {...a11yProps(1)} />
                    <Tab label="Return Policy" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography variant="body1">
                    Gear up for the workout in these men's Performance Tek Shorts from The North Face. Exclusive to JD, these standard-fit shorts are cut from smooth, lightweight poly for long-lasting wear. They dry fast for essential comfort, and they feature an elasticated waist for a secure fit. Finished up with signature TNF branding above the front and back hem. Machine washable. | Our model is 5'11" and wears a size medium.

                </Typography>
                <h5 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mt-3">Care and Material</h5>
                <Typography variant="body2">
                    100% Polyester
                </Typography>
                <h5 style={{ fontFamily: "'Montserrat', sans-serif" }} className="mt-3">Color</h5>
                <Typography variant="body2">
                    Black
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Delivery policy
            </TabPanel>
            <TabPanel value={value} index={2}>
                Return policy
            </TabPanel>
        </Box>
    );
}
