import React from 'react'
import { Divider, Button, Paper, Box, Stack } from '@mui/material'




import image1 from '../Assests/Images/img1.png'
import iamge2 from '../Assests/Images/image2.png'
import image3 from '../Assests/Images/image3.png'
import Footer from '../Assests/Images/footer.png'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const About = () => {

    return (
        <div style={{ marginLeft: '5%',marginTop:'5%'}}>
        
           <Stack direction="row" spacing={5}>
            <Box
                sx={{

                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: "25rem",
                        height: "16vh",
                    },
                }}
            >

                <Paper elevation={2} >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <img src={image1} style={{ width: '37%' }} />
                        </div>
                        <div style={{ marginLeft: '-30%' }}>
                            <h4 style={{ color: 'blue' }}>Find the Perfect Fit</h4>
                            <p style={{ fontSize: '12px' }}>Everybody is different, which is why we</p>
                            <p style={{ fontSize: '12px' }}>offer styles for every body.</p>
                        </div>
                    </div>


                </Paper>
                <Paper elevation={2} >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <img src={iamge2} style={{ width: '37%' }} />
                        </div>
                        <div style={{ marginLeft: '-30%' }} >
                            <h4 style={{ color: 'blue' }}>Find the Perfect Fit</h4>
                            <p style={{ fontSize: '12px' }}>Everybody is different, which is why we</p>
                            <p style={{ fontSize: '12px' }}>offer styles for every body.</p>
                        </div>
                    </div>


                </Paper>
                <Paper elevation={2} >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <img src={image3} style={{ width: '37%' }} />
                        </div>
                        <div style={{ marginLeft: '-30%' }} >
                            <h4 style={{ color: 'blue' }}>Find the Perfect Fit</h4>
                            <p style={{ fontSize: '12px' }}>Everybody is different, which is why we</p>
                            <p style={{ fontSize: '12px' }}>offer styles for every body.</p>
                        </div>
                    </div>

                </Paper>
            </Box>
         
            <div style={{marginLeft:'15%',marginTop:'5%'}}>
               <img src={Footer} style={{width:'55%'}} />
            </div>
            </Stack>
        </div>
    )
}
export default About 