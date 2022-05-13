import React from 'react'
import { Button, CardMedia, Paper, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link }  from 'react-router-dom'

const HomeProduct = (p) => {
    return (
        <Paper elevation={0}
            className="me-3"
            sx={{ minHeight: 420, position: 'relative', minWidth: { xs: "85%", lg: "24%" } }}
        >
            <Link to="/product/:id" style={{textDecoration: 'none'}}>
                <Card style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                    <img
                        src="https://images.unsplash.com/photo-1580997892007-69f89c8ce37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="green iguana"
                        className='img-fluid'
                    />
                    <CardContent className='px-0 py-2'>
                        <Typography variant="h6" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 'bold' }}>
                            {p.title}
                        </Typography>
                        <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
                            {p.description}
                        </div>
                    </CardContent>
                    
                    <Button variant="contained" className='w-100'>
                        ADD TO CART
                    </Button>

                </Card>
            </Link>
        </Paper >
    )
}

export default HomeProduct