import { Stack, Typography, Box } from '@mui/material';
import Accordions from './Accordion';



const About = () => {
  return (
   <Stack id='about' sx={{backgroundImage: `linear-gradient(rgba(35, 13, 13, 0.5), rgba(249, 249, 246, 0.5)),
    url(${require('./assets/images/aboutImage.jpg')})`, // Path to your background image
   backgroundSize: 'cover', // Ensures the image covers the entire page
   backgroundPosition: 'center', // Centers the image
   minHeight: '600px', marginTop:'50px'}}>

<Stack>

  <Typography variant="h3" data-aos="slide-up"
  sx={{ justifyContent:'center', fontWeight:'bold',  position: 'relative',
    display: 'flex', color:'white' ,
  mt:12, 
   '&::after': {
      content: '""',
      display: 'block',
      width: '15%', // Adjust to control underline length
      height: '1px', // Thickness of the underline
      backgroundColor: 'rgb(244,198,48)', // Underline color
      position: 'absolute',
      bottom: '-2px', // Controls gap between text and underline
      left: '43%', // Centers the underline
    }}} 
    style={{ fontFamily: 'Playfair Display, serif',
      fontSize: '30px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px', 
      textAlign: 'center',
      textShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)'}}  >
  About Rutchina Flowers
  </Typography>
</Stack>

<Stack sx={{display:'grid', justifyContent:'center'}} id='AboutText' data-aos="slide-up">
<Typography variant='h6' sx={{pt:2, color:'white'}} >
  
  Rutchina Flowers, your premier destination for  exquisite flowers and floral arrangements in Lagos,
  Nigeria.
  </Typography>
  
    <Box sx={{mb:15}}>
<Accordions/>
    </Box>  
</Stack>


   </Stack>
  )
}

export default About;