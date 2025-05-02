import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';

function Gallery() {


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // xs & sm screens
  

  
  return (

    <Stack id='gallery' >
      <Stack >
        <Typography variant="h3"
          sx={{
            justifyContent: 'center', fontWeight: 'bold', position: 'relative',
            display: 'flex',
            textDecorationColor: 'rgb(244, 196, 48)',
            mt: 10,
            '&::after': {
              content: '""',
              display: 'block',
              width: '15%', // Adjust to control underline length
              height: '1px', // Thickness of the underline
              backgroundColor: 'rgb(244, 196, 48)', // Underline color
              position: 'absolute',
              bottom: '-2px', // Controls gap between text and underline
              left: '43%', // Centers the underline
            }
          }}

            style={{ fontFamily: 'Playfair Display, serif',
              fontSize: '30px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px',
             
              textAlign: 'center',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)'}}  >
          
          Our Gallery  </Typography>
      </Stack>

      <Stack id='gallery-text'>
        <Typography variant='body1' sx={{ fontWeight: 'bold', mt: 2, display: 'flex', justifyContent: 'center' }} data-aos='slide-up'>
          <img src={require('./assets/images/svg4.webp')} alt='' width={50} height={50} className='img' />
          Order today and experience the magic of flowers with Rutchina Flowers!
          <img src={require('./assets/images/svg1.webp')} alt='' width={50} height={50} className='img' />

        </Typography>
      </Stack>

      <Stack direction='row' spacing={3}
        style={{
          display: 'flex', justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(40, 36, 36, 0.5), rgba(1, 1, 0, 0.5)),
        url(${require('./assets/images/GalleryImage.jpg')})`, // Path to your background image
          backgroundSize: 'cover', // Ensures the image covers the entire page
          backgroundPosition: 'center', // Centers the image
          minHeight: '600px'
        }}>

        <Grid container style={{ paddingLeft: '20px' }} className='gallery-container'>
          <Grid item xs='12' sm='12' md='3' lg='6'>
            <Stack style={{ paddingRight: '20px' }}>

              <Typography variant='h5' className='gallery-text' >
                Bouquets
              </Typography>

              <ImageList id='gallery-list' sx={{ width: 500, height: 450 }} cols={isSmallScreen ? 2 : 3} rowHeight={164} >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} id='gallery-list1'>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />

                    <ImageListItemBar
                      title={item.title}
                      subtitle={item.author}      
                    />
                  </ImageListItem>
                ))}
              </ImageList>

            </Stack>
          </Grid>

          <Grid item xs='12' sm='12' md='6' lg='6'>
            <Stack>
              <Typography variant='h5' className='gallery-text'>
                Wholesale
              </Typography>
                 <div id='gallery-div'>
                 <ImageList id='gallery-list' sx={{ width: 500, height: 450 }} cols={isSmallScreen ? 2 : 3} rowHeight={164}>
                {itemData2.map((item) => (
                  <ImageListItem key={item.img} id='gallery-list1'>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />           
                  </ImageListItem>
                ))}
              </ImageList>
                  </div> 
              
            </Stack>
          </Grid>

        </Grid>
      </Stack>

    </Stack>

  );
}

const itemData = [
  {
    img: require('./assets/images/flower11.webp'),
    author: 'Box of 20 Roses',   
  },

  {
    img: require('./assets/images/flower12.webp'),
    author: 'Bouquet of 50 Roses',
  },

  {
    img: require('./assets/images/editted1.webp'),
    author: '12 pink Roses & Gypso',
  },
  {
    img: require('./assets/images/editted0.webp'),
    author: 'Chrysantimum arrangment',
  },

  {
    img: require('./assets/images/editted2.webp'),
    author: 'Mixed Bouquet',
  },
  {
    img: require('./assets/images/editted3.webp'),
    author: '12 Red Roses & Gypso',
  },
  {
    img: require('./assets/images/editted4.webp'),
    author: 'Mixed Bouquet of spray roses & gypso',
  },
  
  {
    img: require('./assets/images/editted6.webp'),
    author: 'Mixed Bouquet',
  },
  {
    img: require('./assets/images/editted7.webp'),
    author: 'Mixed Vase Arrangement',   
  },

  {
    img: require('./assets/images/editted8.webp'),
    author: 'Mixed Bouquet',
  },

  {
    img: require('./assets/images/editted9.webp'),
    author: 'arrangement of flowers',
  },

  {
    img: require('./assets/images/floweredit1.webp'),
    author: 'Wreath',
  },

  {
    img: require('./assets/images/floweredit2.webp'),
    author: 'Mixed vase arrangement',
  },

  {
    img: require('./assets/images/floweredit3.webp'),
    author: 'Mixed arrangement',
  },

  {
    img: require('./assets/images/floweredit4.webp'),
    author: 'Mixed vase arrangement ',
  },

  {
    img: require('./assets/images/floweredit5.webp'),
    author: 'Bouquet of 24 Roses',
  },

  {
    img: require('./assets/images/floweredit6.webp'),
    author: 'Mixed Bouquet',
  },

  {
    img: require('./assets/images/floweredit7.webp'),
    author: 'Mixed Bouquet',
  },
  {
    img: require('./assets/images/floweredit8.webp'),
    author: 'Mixed Vase Arrangement',
  },
  {
    img: require('./assets/images/floweredit9.webp'),
    author: 'Mixed Vase Arrangement',
  },
  {
    img: require('./assets/images/floweredit10.webp'),
    author: '10 Roses & Gypso',
  },

  {
    img: require('./assets/images/floweredit11.webp'),
    author: 'White Chrysantimum Bouquet',
  },

  {
    img: require('./assets/images/floweredit12.webp'),
    author: 'Mixed Vase Bouquet',
  },
  {
    img: require('./assets/images/floweredit13.webp'),
    author: 'Mixed Arrangement',
  },
  

  {
    img: require('./assets/images/floweredit15 (2).webp'),
    author: 'Mixed Arrangement',
  },
  {
    img: require('./assets/images/flo1.webp'),
    author: 'Spray Roses Bouquet',
  },

  {
    img: require('./assets/images/floweredit17.webp'),
    author: 'Mixed Arrangement',
  },

  {
    img: require('./assets/images/flo2.webp'),
    author: 'Mixed Arrangement',
  },

  {
    img: require('./assets/images/flo3.webp'),
    author: 'Mixed Arrangement',
  },

  {
    img: require('./assets/images/flo4.webp'),
    author: 'Mixed Arrangement',
  },

  {
    img: require('./assets/images/flo5.webp'),
   
  },

  {
    img: require('./assets/images/flo6.webp'),
   
  },

  {
    img: require('./assets/images/flo7.webp'),
    
  },

  {
    img: require('./assets/images/flo8.webp'),
    
  },

  {
    img: require('./assets/images/flo9.webp'),
   
  },

  {
    img: require('./assets/images/flo10.webp'),
   
  },

  {
    img: require('./assets/images/flo11.webp'),
    
  },

  {
    img: require('./assets/images/flo12.webp'),
    
  },

  {
    img: require('./assets/images/flo13.webp'),
    
  },
  {
    img: require('./assets/images/flo14.webp'),

  },

  {
    img: require('./assets/images/flo15.webp'),

  },

  
];


const itemData2 = [
  {
    img: require('./assets/images/w.webp'), 
  },
{
    img: require('./assets/images/w10.webp'), 
  },
  {
    img: require('./assets/images/w1.webp'), 
  },

  {
    img: require('./assets/images/w30.webp'), 
  },
  
  {
    img: require('./assets/images/w4.webp'), 
  },
  {
    img: require('./assets/images/w5.webp'), 
  },
  {
    img: require('./assets/images/w6.webp'), 
  },
  {
    img: require('./assets/images/w7.webp'), 
  },
  {
    img: require('./assets/images/w8.webp'), 
  },
  {
    img: require('./assets/images/w9.webp'), 
  },

  {
    img: require('./assets/images/w11.webp'), 
  },
  {
    img: require('./assets/images/w12.webp'), 
  },
  {
    img: require('./assets/images/w13.webp'), 
  },
  {
    img: require('./assets/images/w14.webp'), 
  },

  {
    img: require('./assets/images/w25.webp'), 
  },
  {
    img: require('./assets/images/w16.webp'), 
  },
  {
    img: require('./assets/images/w17.webp'), 
  },
  {
    img: require('./assets/images/w18.webp'), 
  },
  {
    img: require('./assets/images/w19.webp'), 
  },
 
  {
    img: require('./assets/images/w21 (1).webp'), 
  },
  {
    img: require('./assets/images/w22.webp'), 
  },
  {
    img: require('./assets/images/w23.webp'), 
  },
  
  {
    img: require('./assets/images/w25.webp'), 
  },
  
];

export default Gallery;