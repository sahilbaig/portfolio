import uuid from 'react-uuid';
import "./project.css"
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const projects=[
    {
        "name":"Driver Onboarding Application",
        "desc":"I did a lot of work writing radnom shit to fill up white space and see if it axually makes any sende.Still adding thigs to make it better",
        "image":"https://www.shilpa-ui-ux.com/onb_cov.png",
        "duration":"1-10-2020",
        "company":"Flipkart"
    },
    {
        "name":"Designing an Icon set",
        "desc":"I did a lot of work writing radnom shit to fill up white space and see if it axually makes any sende.Still adding thigs to make it better ",
        "image":"https://www.shilpa-ui-ux.com/icon2.png",
        "duration":"1-10-2020",
        "company":"Flipkart"
    },
    {
        "name":"Payment Break Up Page",
        "desc":"I did a lot of work writing radnom shit to fill up white space and see if it axually makes any sende.Still adding thigs to make it better ",
        "image":"https://www.shilpa-ui-ux.com/payment3.png",
        "duration":"1-10-2020",
        "company":"Flipkart"
    
    }
]

function Projects (){

    
    return(
        <Grid container spacing={2}>
            {projects.map((item)=>{
                return(
                    <Grid item xs={3}>
                            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
        </Grid>
                )
           })}
        
      </Grid>
    )
        
}




export default Projects