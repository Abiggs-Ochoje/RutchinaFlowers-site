import { Box, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const FloristicService = () => {
  return (
    <Stack>

      <Stack>
        <Typography variant="h3" data-aos='slide-up'
          sx={{
            justifyContent: 'center', fontWeight: 'bold', position: 'relative',
            display: 'flex',
            textDecorationColor: 'rgb(244, 196, 48)',
            my: 15,
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
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '30px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',

            textAlign: 'center',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          Floristic Services
        </Typography>
      </Stack>

      <Grid container spacing={2} justifyContent='center' className='flouristic-container' sx={{ mb: 10 }} >
        <Grid size={{ xs: '12', sm: '6', md: '3' }} id='type-box' sx={{ marginLeft: '25px' }} data-aos='slide-up'>
          <Box sx={{ mb: 3 }} >
            <Typography variant="h6" component='h4' sx={{ mb: 1, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Bouquets
            </Typography>
            <Typography variant="body2" sx={{
              width: '100%', maxWidth: 300, textOverflow: 'ellipsis',
              whiteSpace: 'normal', letterSpacing: '1px'
            }}>
              With our diverse selection of flowers, we can create an endless array of stunning
              combinations tailored to your needs.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" component='h4' sx={{ mb: 1, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Event
            </Typography>
            <Typography variant="body2" sx={{
              width: '100%', maxWidth: 300, textOverflow: 'ellipsis',
              whiteSpace: 'normal', letterSpacing: '1px'
            }}>
              Flowers make a wonderful decoration and can enhance any event, regardless of its size or purpose.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component='h4' sx={{ mb: 1, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Interior florist
            </Typography>
            <Typography variant="body2" sx={{
              width: '100%', maxWidth: 300, textOverflow: 'ellipsis',
              whiteSpace: 'normal', letterSpacing: '1px'
            }}>
              Let our skilled team of decorators and florists transform your indoor space into
              something truly beautiful and inviting!
            </Typography>
          </Box>

        </Grid>

        <Grid size={{ xs: '12', sm: '6', md: '3', lg: '3' }} id='type-box' sx={{ marginLeft: '20px', mb: 1 }} data-aos='slide-up'>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component='h4' sx={{ textTransform: 'uppercase', letterSpacing: '1px', mt: 1 }}>
              Delivery
            </Typography>
            <Typography variant="body2" sx={{
              width: '100%', maxWidth: 300, textOverflow: 'ellipsis',
              letterSpacing: '1px', whiteSpace: 'normal'
            }}>
              Do you live in a distant area of the state or simply prefer your bouquet delivered straight
              to your doorstep? You’ve come to the perfect place!
            </Typography>
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="h6" component='h4' sx={{ mb: 1, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Exterior Florist
            </Typography>
            <Typography variant="body2" sx={{
              width: '100%', maxWidth: 300, textOverflow: 'ellipsis',
              whiteSpace: 'normal', letterSpacing: '1px'
            }}>
              With years of expertise, we’ll transform your garden, office, or home
              into a vibrant, blooming paradise!
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component='h4' sx={{ mb: 1, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Hospitality
            </Typography>
            <Typography variant="body2" sx={{
              width: '100%', maxWidth: 300, textOverflow: 'ellipsis',
              whiteSpace: 'normal', letterSpacing: '1px'
            }}>
              Banks, hotels, and restaurants have consistently been among our most valued and prominent clients.
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: '12', sm: '12', md: '6', lg: '6' }} id="floristic-div"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg:'block' }, width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
             border: '5px dotted rgb(244, 196, 48)', borderRadius:' 150px 150px 0 0'
          }} >

          <LazyLoadImage
            src={require('./assets/images/Ona.webp')} alt="" effect="blur" id="floristic-img" />

        </Grid>

        
      </Grid>
    </Stack>





  )
}

export default FloristicService;