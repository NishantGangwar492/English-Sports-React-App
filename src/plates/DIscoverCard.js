import React from 'react'
import { CardMedia, Paper, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const DIscoverCard = (p) => {
    return (
        <Paper elevation={0}
            sx={{ minHeight: 420, position: 'relative' }}
        >
            <Card style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image="https://via.placeholder.com/300x300"
                    alt="green iguana"
                />
                <CardContent className='px-0'>
                    <Typography variant="h6" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 'bold' }}>
                        {p.title}
                    </Typography>
                    <div style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
                        {p.description}
                    </div>
                </CardContent>

            </Card>
        </Paper>
    )
}

export default DIscoverCard