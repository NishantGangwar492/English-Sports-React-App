import React from 'react'
import { Paper } from '@mui/material'
import './CategoryCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



const CategoryCard = (p) => {
    return (
        <Paper elevation={2}
            sx={{ minWidth: { xs: '85%', sm: '50%', lg: "32%" }, minHeight: 600, position: 'relative' }}
            className="category-card me-4"
        >
            <Card style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                <CardContent>
                </CardContent>
                <CardActions style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', position: 'absolute', bottom: 10, width: '100%' }}>
                    <Button style={{ fontFamily: "'Montserrat', sans-serif" }} variant="contained" className="w-100 py-3 bg-white text-black mx-2 my-2">{p.btn1}</Button>
                    <Button style={{ fontFamily: "'Montserrat', sans-serif" }} variant="contained" className="w-100 py-3 bg-white text-black mx-2 my-2">{p.btn2}</Button>
                    <Button style={{ fontFamily: "'Montserrat', sans-serif" }} variant="contained" className="w-100 py-3 bg-white text-black mx-2 my-2">{p.btn3}</Button>
                </CardActions>
            </Card>
        </Paper>
    )
}

export default CategoryCard