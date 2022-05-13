import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './Footer.css'






const Footer = () => {
    return (
        <>
            <Container>
                <hr />
                <br />
                <Row>
                    <Col className="footer-list" xs={12} lg={2}>
                        <Typography variant="h6">
                            Section
                        </Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton className="p-0">
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="Pricing" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="FAQs" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </List>
                    </Col>
                    <Col className="footer-list" xs={12} lg={2} >
                        <Typography variant="h6">
                            Section
                        </Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton className="p-0">
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="Pricing" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="FAQs" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </List>

                    </Col>
                    <Col className="footer-list" xs={12} lg={2} >
                        <Typography variant="h6">
                            Section
                        </Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton className="p-0">
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="Pricing" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="FAQs" />
                            </ListItemButton>
                            <ListItemButton className="p-0">
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </List>
                    </Col>
                    <Col lg={5} >
                        <Typography variant="h4">
                            Subscribe to our newsletter
                        </Typography>
                        <Typography variant="body2" className='py-1'>
                            Monthly digest of whats new and exciting from us.
                        </Typography>
                        <br />
                        <Box className='d-flex justify-content-between'>
                            <input className='bg-white rounded border w-100 me-3 px-2' placeholder='Enter your E-mail' />
                            <Button variant="contained">
                                Subscribe
                            </Button>
                        </Box>
                    </Col>
                </Row>
                <br />
            </Container>
            <br />
        </>
    )
}

export default Footer