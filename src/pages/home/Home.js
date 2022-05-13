import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from '../../components/home/Carousel'
import Box from '@mui/material/Box';
import CategoryCard from '../../plates/CategoryCard';
import HomeProduct from '../../plates/HomeProduct';
import { Typography } from '@mui/material';
import DIscoverCard from '../../plates/DIscoverCard';
import './Home.css'


const Home = () => {
    return (
        <>
            <Carousel
                Height={'550px'}
                minimumHeight={'300px'}
                img1={'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                img2={'https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'}
                img3={'https://images.unsplash.com/photo-1542652694-40abf526446e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
            />
            <br />
            <br />
            <Container>
                <img src={'https://images.pexels.com/photos/4016513/pexels-photo-4016513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} style={{ height: '200px', maxWidth: '1320px' }} alt="..." className='w-100' />
                <br />
                <br />
                <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>Shop by category</h2>
                <Box className='my-3 row-category'
                    style={{ display: 'flex', overflowX: 'scroll' }}
                >
                    <CategoryCard
                        btn1={"Men's Shorts"}
                        btn2={"Basketball Shoes"}
                        btn3={"Basketball Accessories"}
                    />
                    <CategoryCard
                        btn1={"Boxing Clothing"}
                        btn2={"Boxing Gloves"}
                        btn3={"Boxing Protection Equipment"}
                    />
                    <CategoryCard
                        btn1={"Cricket Kit"}
                        btn2={"Cricket Bat"}
                        btn3={"Cricket Ball"}
                    />
                    <br />
                </Box>
                <Carousel
                    Height={'600px'}
                    img1={'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'}
                    img2={'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                    img3={'https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80'}
                />
                <br />
                <br />
                <img src={'https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} style={{ height: '200px', maxWidth: '1320px' }} alt="..." className='w-100' />
                <br />
                <br />
                <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>Top Picks</h2>
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
                <Row className='justify-content-between'>
                    <Col xs lg={6}>
                        <img src='https://via.placeholder.com/1000x800' className='img-fluid' />
                        <Typography className='mt-2' variant="h6" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 'bold' }}>
                            New Arrivals
                        </Typography>
                    </Col>
                    <Col xs lg={6}>
                        <img src='https://via.placeholder.com/1000x800' className='img-fluid' />
                        <Typography className='mt-2' variant="h6" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 'bold' }}>
                            Trending
                        </Typography>
                    </Col>
                </Row>
                <br />
                <br />
                <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>Discover</h2>
                <Row className='my-3'>
                    <Col xs={12} lg={4}>
                        <DIscoverCard
                            title={'In The Duffle Bag S4 Ep 8 with John Boyega'}
                            description="Star of the big screen, John Boyega, has linked up with our guy Chuckie for the latest ep of 'In The Duffle Bag'! The two chat about Boyega's journey to acting, what the future's sayin', and his latest campaign fronted by Converse; the 'Create Next Film Project'. Don't miss it!"
                        />
                    </Col>
                    <Col xs={12} lg={4}>
                        <DIscoverCard
                            title={'In The Duffle Bag S4 Ep 8 with John Boyega'}
                            description="Star of the big screen, John Boyega, has linked up with our guy Chuckie for the latest ep of 'In The Duffle Bag'! The two chat about Boyega's journey to acting, what the future's sayin', and his latest campaign fronted by Converse; the 'Create Next Film Project'. Don't miss it!"
                        />
                    </Col>
                    <Col xs={12} lg={4}>
                        <DIscoverCard
                            title={'In The Duffle Bag S4 Ep 8 with John Boyega'}
                            description="Star of the big screen, John Boyega, has linked up with our guy Chuckie for the latest ep of 'In The Duffle Bag'! The two chat about Boyega's journey to acting, what the future's sayin', and his latest campaign fronted by Converse; the 'Create Next Film Project'. Don't miss it!"
                        />
                    </Col>
                </Row>
            </Container>
            <br />
            {/* <Rating /> */}
        </>
    )
}

export default Home